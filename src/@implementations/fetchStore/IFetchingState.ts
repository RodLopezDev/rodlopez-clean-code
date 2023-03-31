export interface BaseFetchingState<T> {
  isFetching: boolean;
  hasError: boolean;
  errorMessage: string;
  data: T | null;
}

interface IFetchingState<T> extends BaseFetchingState<T> {
  on: {
    init: (dontRestartData?: boolean) => void;
    success: (data: T) => void;
    error: (message?: string) => void;
    reset: () => void;
    getState: () => BaseFetchingState<T>;
  };
}

export default IFetchingState;
