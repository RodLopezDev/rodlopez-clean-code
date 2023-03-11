import { useEffect } from "react";

import { UseCaseRunner, UseCaseRunnerWithParams } from "../application";

type UseCaseEventAdapter<T = undefined> = T extends undefined
  ? UseCaseRunner
  : UseCaseRunnerWithParams<T>;

const useEffectdapter = function useEffectdapter<T = undefined>(
  usecase: UseCaseEventAdapter<T>,
  dependencies: any[] = [],
  initialValue: T | undefined = undefined
) {
  useEffect(() => {
    usecase((initialValue || {}) as T);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
  return [usecase];
};

export default useEffectdapter;
