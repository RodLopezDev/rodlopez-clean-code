interface IRequest<T> {
  isFetching: boolean;
  isReady: boolean;
  hasError: boolean;
  errorMessage: string | string[];
  data: T | null;
}

export default IRequest;
