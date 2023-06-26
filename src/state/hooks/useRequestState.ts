import * as React from "react";
import IRequest from "../domain/IRequest";

type Result<T> = [
  IRequest<T>,
  React.Dispatch<React.SetStateAction<IRequest<T>>>
];

const useRequestState = function useRequestState<T>(): Result<T> {
  const [state, setState] = React.useState<IRequest<T>>({
    isFetching: false,
    hasError: false,
    data: null,
    isReady: false,
    errorMessage: "",
  });
  return [state, setState];
};

export default useRequestState;
