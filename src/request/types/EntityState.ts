interface EntityState<ENTITY, ERROR = string> {
  data: ENTITY | null;
  isFetching: boolean;
  isReady: boolean;
  hasError: boolean;
  errorObject: ERROR;
}

export default EntityState;
