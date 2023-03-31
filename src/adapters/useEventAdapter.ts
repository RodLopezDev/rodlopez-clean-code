import { UseCaseRunner, UseCaseRunnerWithParams } from "../application/types";

type UseCaseEventAdapter<T = undefined> = T extends undefined
  ? UseCaseRunner
  : UseCaseRunnerWithParams<T>;

const useEventAdapter = function useEventAdapter<T = undefined>(
  usecase: UseCaseEventAdapter<T>
) {
  const runnable = (data?: T): void | Promise<void> => {
    if (!!data) {
      usecase(data);
    } else {
      usecase({} as T);
    }
  };
  return [runnable];
};

export default useEventAdapter;
