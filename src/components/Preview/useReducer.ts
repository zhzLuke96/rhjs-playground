import { readonly, ref, Ref, shallowRef, untrack } from "@rhjs/rh";

type Action<T> = {
  type: string;
  payload?: T;
};

type Reducer<S, A> = (state: S, action: A) => S;

export function useReducer<S, A extends Action<any>>(
  reducer: Reducer<S, A>,
  initialState: S
) {
  const state = shallowRef(initialState) as Ref<S>;
  const dispatch = (action: A) => {
    state.value = reducer(untrack(state), action);
  };

  return [readonly(state), dispatch] as const;
}
