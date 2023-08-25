interface MethodState<ENTITY, ERROR = string> {
  init: () => void;
  success: (entity: ENTITY) => void;
  error: (errorObject: ERROR) => void;
  reset: () => void;
}

export default MethodState;
