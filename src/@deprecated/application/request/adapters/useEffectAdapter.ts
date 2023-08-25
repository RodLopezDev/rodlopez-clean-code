import * as React from "react";
import { Runnable, RunnableWithParams } from "../domain/types";

type UseCaseEventAdapter<T = undefined> = T extends undefined
  ? Runnable
  : RunnableWithParams<T>;

const useEffectAdapter = function useEffectAdapter<T = undefined>(
  usecase: UseCaseEventAdapter<T>,
  dependencies: any[] = [],
  initialValue: T
) {
  React.useEffect(() => {
    usecase((initialValue || {}) as T);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
  return [usecase];
};

export default useEffectAdapter;
