import { Runnable, RunnableWithParams } from "../domain/types";

type UseCaseEventAdapter<T = undefined> = T extends undefined
  ? Runnable
  : RunnableWithParams<T>;

const useEventAdapter = function useEventAdapter<T = undefined>(
  usecase: UseCaseEventAdapter<T>
) {
  const runnable = (data?: T) => {
    usecase((data || {}) as T);
  };
  return [runnable];
};

export default useEventAdapter;
