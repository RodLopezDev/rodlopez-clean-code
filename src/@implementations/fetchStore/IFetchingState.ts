interface IFetchingState<T> {
  isFetching: boolean;
  hasError: boolean;
  errorMessage: string;
  data: T | null;
  on: {
    init: (dontRestartData?: boolean) => void;
    success: (data: T) => void;
    error: (message?: string) => void;
    reset: () => void;
  };
}

export default IFetchingState;
