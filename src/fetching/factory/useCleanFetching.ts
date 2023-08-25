import {
  generateErrorMiddleware,
  generateSigleMiddleware,
  generateSuccessMiddleware,
} from "../utils/middlewares";
import EntityState from "../types/EntityState";
import RequestState from "../types/RequestState";
import FetchingStateMiddleware from "../types/FetchingStateMiddleware";

import useTraceableState from "../../state/useTraceableState";

interface Props<ENTITY, ERROR = string> {
  isFetching?: boolean;
  middlewares?: FetchingStateMiddleware<ENTITY, ERROR>;
}

const useCleanFetching = function useCleanFetching<ENTITY, ERROR = string>(
  props: Props<ENTITY, ERROR> = {}
): RequestState<ENTITY, ERROR> {
  const { isFetching, middlewares } = props;

  const [state, setState] = useTraceableState<EntityState<ENTITY, ERROR>>({
    data: null,
    isFetching: isFetching || false,
    isReady: false,
    hasError: false,
    errorObject: "" as ERROR,
  });

  const initMiddleware = generateSigleMiddleware(middlewares?.init);
  const successMiddleware = generateErrorMiddleware<ENTITY, ERROR>(
    middlewares?.error
  );
  const errorMiddleware = generateSuccessMiddleware<ENTITY, ERROR>(
    middlewares?.success
  );
  const resetMiddleware = generateSigleMiddleware(middlewares?.reset);

  const init = () => {
    setState(
      {
        data: null,
        isFetching: true,
        isReady: false,
        hasError: false,
        errorObject: "" as ERROR,
      },
      initMiddleware
    );
  };

  const success = (data: ENTITY) => {
    setState(
      {
        data,
        isFetching: false,
        isReady: true,
        hasError: false,
        errorObject: "" as ERROR,
      },
      successMiddleware
    );
  };

  const error = (errorObject: ERROR) => {
    setState(
      {
        data: null,
        isFetching: false,
        isReady: true,
        hasError: true,
        errorObject,
      },
      errorMiddleware
    );
  };

  const reset = () => {
    setState(
      {
        data: null,
        isFetching: false,
        isReady: false,
        hasError: false,
        errorObject: "" as ERROR,
      },
      resetMiddleware
    );
  };

  return {
    ...state,
    on: {
      init,
      success,
      error,
      reset,
    },
  };
};

export default useCleanFetching;
