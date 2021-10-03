import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';

type TResult = {
  score: number
  date: number
}

interface State {
  resultsList: TResult[]
}

export default createStore<State>({
  state: {
    resultsList: [],
  },
  mutations: {
    newResult(state, result: TResult) {
      state.resultsList = [...state.resultsList, result];
    },
  },
});

export const key: InjectionKey<Store<State>> = Symbol('store');

export function useStore() {
  return baseUseStore(key);
}
