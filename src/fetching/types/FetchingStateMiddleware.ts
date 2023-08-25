export type SingleMiddleware = () => void;
export type SuccessMiddleware<ENTITY> = (entity: ENTITY) => void;
export type ErrorMiddleware<ERROR = string> = (errorObject: ERROR) => void;

interface FetchingStateMiddleware<ENTITY, ERROR = string> {
  init?: SingleMiddleware | SingleMiddleware[];
  reset?: SingleMiddleware | SingleMiddleware[];
  success?: SuccessMiddleware<ENTITY> | SuccessMiddleware<ENTITY>[];
  error?: ErrorMiddleware<ERROR> | ErrorMiddleware<ERROR>[];
}

export default FetchingStateMiddleware;
