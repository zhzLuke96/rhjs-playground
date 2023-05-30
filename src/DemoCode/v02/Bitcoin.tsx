import {
  rh,
  mount,
  unref,
  createResource,
  onMounted,
  createState,
  GlobalStyle,
  onUnmounted,
  createWatcher,
  createMemo,
} from "@rhjs/rh";

const timeIntervals = {
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
};
const calcTimeSince = (date: any) => {
  const seconds = Math.floor(
    (new Date().getTime() - new Date(date).getTime()) / 1000
  );
  let intervalType = "" as keyof typeof timeIntervals;

  if (seconds < 60) {
    intervalType = "second";
  } else if (seconds < 3600) {
    intervalType = "minute";
  } else if (seconds < 86400) {
    intervalType = "hour";
  } else {
    intervalType = "day";
  }

  const intervalCount = Math.floor(seconds / timeIntervals[intervalType]);
  return `${intervalCount} ${intervalType}${
    intervalCount !== 1 ? "s" : ""
  } ago`;
};

const createInterval = (...args: Parameters<typeof setInterval>) => {
  const timer = setInterval(...args);
  onUnmounted(() => clearInterval(timer));
};

const API_URL = "https://api.coindesk.com/v1/bpi/currentprice.json";
const createPriceResource = () => {
  let updateDate = new Date();
  const [timeSince, setTimeSince] = createState("");
  const [data, { refetch, fetching }] = createResource<{
    bpi: { USD: { rate_float: number } };
  }>(() => fetch(API_URL).then((resp) => resp.json()), {
    onSuccess() {
      updateDate = new Date();
      setTimeSince(calcTimeSince(updateDate));
    },
  });

  onMounted(refetch);
  createInterval(refetch, 30 * 1000); // 30 seconds
  createInterval(() => {
    const result = unref(data);
    if (!result) {
      return;
    }
    setTimeSince(calcTimeSince(updateDate));
  }, 1000);

  const [delta, setDelta] = createState(0);
  createWatcher(data, (value, prev) => {
    if (value && prev && value !== prev) {
      const nextDelta = value.bpi.USD.rate_float - prev.bpi.USD.rate_float;
      if (nextDelta === 0) {
        return;
      }
      setDelta(nextDelta);
    }
  });

  return {
    data,
    timeSince,
    refetch,
    fetching,
    delta,
  };
};

const App = () => {
  const {
    data: price,
    delta,
    timeSince,
    refetch,
    fetching,
  } = createPriceResource();
  return () => {
    const currentPrice = unref(price);

    if (currentPrice === undefined) {
      return <span>loading...</span>;
    }
    const {
      bpi: {
        USD: { rate_float },
      },
    } = currentPrice;

    const isUpwardTrend = createMemo(() => unref(delta) > 0);
    return (
      <div>
        <GlobalStyle
          style={{
            "button[disabled]": {
              cursor: "not-allowed",
            },
          }}
        ></GlobalStyle>
        <h1>₿itcoin Price (BTC)</h1>
        <h1>
          {rate_float.toLocaleString("en", {
            style: "currency",
            currency: "USD",
          })}

          {() =>
            unref(delta) === 0 ? null : (
              <span style={`color: ${unref(isUpwardTrend) ? "red" : "green"}`}>
                {unref(isUpwardTrend) ? "⬆" : "⬇"} {unref(delta).toFixed(2)}
              </span>
            )
          }
        </h1>
        <p>
          <button disabled={fetching} onClick={refetch}>
            ♻️
          </button>{" "}
          {timeSince}
        </p>
        <p>{() => (unref(fetching) ? "fetching..." : "")}</p>
      </div>
    );
  };
};

mount(document.querySelector("#app")!, App);
