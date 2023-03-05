import { useState } from "react";
import IFetchingState from "./IFetchingState";

const useFetchingState = function useFetchingState<T>(): IFetchingState<T> {
  const [state, setState] = useState<{
    loading: boolean;
    error: boolean;
    errorMessage: string;
    data: T | null;
  }>({
    loading: false,
    error: false,
    data: null,
    errorMessage: "",
  });

  const init = () => {
    setState({
      loading: true,
      error: false,
      data: null,
      errorMessage: "",
    });
  };

  const success = (data: T) => {
    setState({
      loading: false,
      error: false,
      data,
      errorMessage: "",
    });
  };

  const error = (message?: string) => {
    setState({
      loading: false,
      error: true,
      data: null,
      errorMessage: message || "",
    });
  };

  const reset = () => {
    setState({
      loading: false,
      error: false,
      data: null,
      errorMessage: "",
    });
  };

  return {
    isFetching: state.loading,
    hasError: state.error,
    data: state.data,
    errorMessage: "",
    on: { init, success, error, reset },
  };
};

export default useFetchingState;
