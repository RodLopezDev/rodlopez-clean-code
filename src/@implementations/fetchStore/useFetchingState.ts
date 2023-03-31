import * as React from "react";
import IFetchingState from "./IFetchingState";

const useFetchingState = function useFetchingState<T>(): IFetchingState<T> {
  const [state, setState] = React.useState<{
    isFetching: boolean;
    hasError: boolean;
    errorMessage: string;
    data: T | null;
  }>({
    isFetching: false,
    hasError: false,
    data: null,
    errorMessage: "",
  });

  const init = (dontRestartData?: boolean) => {
    setState({
      isFetching: true,
      hasError: false,
      data: !!dontRestartData ? state.data : null,
      errorMessage: "",
    });
  };

  const success = (data: T) => {
    setState({
      isFetching: false,
      hasError: false,
      data,
      errorMessage: "",
    });
  };

  const error = (message?: string) => {
    setState({
      isFetching: false,
      hasError: true,
      data: null,
      errorMessage: message || "",
    });
  };

  const reset = () => {
    setState({
      isFetching: false,
      hasError: false,
      data: null,
      errorMessage: "",
    });
  };

  const getState = () => state;

  return {
    ...state,
    on: { init, success, error, reset, getState },
  };
};

export default useFetchingState;
