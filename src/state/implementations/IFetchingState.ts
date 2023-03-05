import IState from "state/IState";

interface IFetchingState<T> extends IState {
  isFetching: boolean;
  hasError: boolean;
  errorMessage: string;
  data: T | null;
  on: {
    init: () => void;
    success: (data: T) => void;
    error: (message?: string) => void;
    reset: () => void;
  };
}

export default IFetchingState;
