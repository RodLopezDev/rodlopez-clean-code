import { useEffect } from "react";

import {
  generateErrorMiddleware,
  generateSigleMiddleware,
  generateSuccessMiddleware,
} from "../../utils/middlewares";

import EntityState from "../../types/EntityState";
import RequestState from "../../types/RequestState";
import useTraceableState from "../../../state/useTraceableState";
import RequestStateMiddleware from "../../types/RequestStateMiddleware";

interface BaseProp<ENTITY, ERROR = string> {
  isFetching?: boolean;
  method?: () => Promise<ENTITY>;
  middlewares?: RequestStateMiddleware<ENTITY, ERROR>;
  getError?: (e: unknown) => ERROR;
}

const useRequest = function useRequest<ENTITY, ERROR = string>(
  props: BaseProp<ENTITY, ERROR> = { isFetching: false }
): RequestState<ENTITY, ERROR> {
  const { middlewares } = props;

  const [state, setState] = useTraceableState<EntityState<ENTITY, ERROR>>({
    data: null,
    isFetching: !!props?.method ? true : props?.isFetching || false,
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

  const defaultGetError = (e: unknown) => (e as any)?.message || ("" as ERROR);

  const traceAsync = async (
    promise: () => Promise<ENTITY>,
    getError?: (e: unknown) => ERROR
  ) => {
    init();
    try {
      const result = await promise();
      success(result);
    } catch (e: unknown) {
      const errorObject = getError?.(e) || defaultGetError(e);
      error(errorObject);
    }
  };

  useEffect(() => {
    if (props.method) {
      traceAsync(props.method, props?.getError || defaultGetError);
    }
  }, []);

  return {
    ...state,
    traceAsync,
    methods: {
      init,
      success,
      error,
      reset,
    },
  };
};

export default useRequest;
