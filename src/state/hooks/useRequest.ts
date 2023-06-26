import IRequestMethods from "../domain/IRequestMethods";
import useRequestState from "./useRequestState";

const useRequest = function useRequest<T>(): IRequestMethods<T> {
  const [state, setState] = useRequestState<T>();

  const init = (dontRestartData?: boolean) => {
    setState({
      isFetching: true,
      hasError: false,
      data: !!dontRestartData ? state.data : null,
      errorMessage: "",
      isReady: false,
    });
  };

  const success = (data: T) => {
    setState({
      isFetching: false,
      hasError: false,
      data,
      errorMessage: "",
      isReady: true,
    });
  };

  const error = (message?: string | string[]) => {
    setState({
      isFetching: false,
      hasError: true,
      data: null,
      errorMessage: message || "",
      isReady: false,
    });
  };

  const reset = () => {
    setState({
      isFetching: false,
      hasError: false,
      data: null,
      errorMessage: "",
      isReady: false,
    });
  };

  const getState = () => state;

  return {
    ...state,
    on: { init, success, error, reset, getState },
  };
};

export default useRequest;
