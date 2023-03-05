import { useState } from "react";
import IFetchingState from "./IFetchingState";

const useFetchingState = function useFetchingState<T>(): IFetchingState<T> {
  const [state, setState] = useState<{
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

  const init = () => {
    setState({
      isFetching: true,
      hasError: false,
      data: null,
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

  return {
    ...state,
    on: { init, success, error, reset },
  };
};

export default useFetchingState;
