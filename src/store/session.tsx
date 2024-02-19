import { StoreApi, UseBoundStore, create } from "zustand";
import { combine, devtools } from "zustand/middleware";

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S
) => {
  let store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (let k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }
  return store;
};

export const useAppStore = createSelectors(
  create(
    devtools(
      combine(
        {
          duration: 60,
          timer: 0,
          showPub: true,
          showResult: false,
        },
        (set) => ({
          updateTimer: (newTimer: number) => set({ timer: newTimer }),
          setShowPub: (newShowPub: boolean) => set({ showPub: newShowPub }),
          setShowResult: (newShowResult: boolean) =>
            set({ showResult: newShowResult }),
        })
      )
    )
  )
);

if (typeof window !== "undefined") {
  window.setInterval(() => {
    useAppStore.setState((state) => ({
      timer: state.timer > 0 ? state.timer - 1 : 0,
    }));

    if (useAppStore.getState().timer === 0) {
      useAppStore.getState().setShowPub(true);
      useAppStore.getState().setShowResult(false);
    } else {
      useAppStore.getState().setShowPub(false);
      useAppStore.getState().setShowResult(true);
    }
  }, 1000);
}
