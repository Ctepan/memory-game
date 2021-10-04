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
  getters: {
    topRankScore(state) {
      const bestScore = state.resultsList.reduce((min, result) => (
        min === -1
          ? result.score
          : Math.min(min, result.score)
      ), -1);

      return bestScore !== -1 ? bestScore : null;
    },
  },
});

export const key: InjectionKey<Store<State>> = Symbol('store');

export function useStore() {
  return baseUseStore(key);
}
