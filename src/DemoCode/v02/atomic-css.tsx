import { rh, mount } from "@rhjs/core";
import { Scope } from "@rhjs/builtin";
// @ts-ignore
import { html } from "@rhjs/tag";
// @ts-ignore
import { enable as enableAtomicCSS } from "@rhjs/atomic-css";

enableAtomicCSS("$class");

const Logo = ({ fillColor = "#4f46e5" }: { fillColor?: string }) => {
  return () => html`
    <svg
      $class="mx-auto h-10 w-auto"
      alt="Your Company"
      viewBox="0 0 47 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill=${fillColor}
        d="M23.5 6.5C17.5 6.5 13.75 9.5 12.25 15.5C14.5 12.5 17.125 11.375 20.125 12.125C21.8367 12.5529 23.0601 13.7947 24.4142 15.1692C26.6202 17.4084 29.1734 20 34.75 20C40.75 20 44.5 17 46 11C43.75 14 41.125 15.125 38.125 14.375C36.4133 13.9471 35.1899 12.7053 33.8357 11.3308C31.6297 9.09158 29.0766 6.5 23.5 6.5ZM12.25 20C6.25 20 2.5 23 1 29C3.25 26 5.875 24.875 8.875 25.625C10.5867 26.0529 11.8101 27.2947 13.1642 28.6693C15.3702 30.9084 17.9234 33.5 23.5 33.5C29.5 33.5 33.25 30.5 34.75 24.5C32.5 27.5 29.875 28.625 26.875 27.875C25.1633 27.4471 23.9399 26.2053 22.5858 24.8307C20.3798 22.5916 17.8266 20 12.25 20Z"
      />
      <defs>
        <linearGradient
          id="%%GRADIENT_ID%%"
          x1="33.999"
          x2="1"
          y1="16.181"
          y2="16.181"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="%%GRADIENT_TO%%" />
          <stop offset="1" stop-color="%%GRADIENT_FROM%%" />
        </linearGradient>
      </defs>
    </svg>
  `;
};

const LoginPage = () => {
  return () =>
    html`
      <div
        $class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white"
      >
        <div $class="sm:mx-auto sm:w-full sm:max-w-sm">
          <${Logo} />
          <h2
            $class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
          >
            Sign in to your account
          </h2>
        </div>

        <div $class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form $class="space-y-6" action="#" method="POST">
            <div>
              <label
                for="email"
                $class="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div $class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  $class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div $class="flex items-center justify-between">
                <label
                  for="password"
                  $class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div $class="text-sm">
                  <a
                    href="#"
                    $class="font-semibold text-indigo-600 hover:text-indigo-500"
                    >Forgot password?</a
                  >
                </div>
              </div>
              <div $class="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  $class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                $class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p $class="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <a
              href="#"
              $class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    `;
};

const App = () => {
  return () => (
    <div>
      <h1>@rhjs/atomic-css</h1>
      <p>
        Here the styles are not polluted by atomic-css
        <button>👌</button>
      </p>
      <Scope>
        <LoginPage />
      </Scope>
    </div>
  );
};

mount("#app", App);
