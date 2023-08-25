import IRequest from "./IRequest";

interface IRequestMethods<T> extends IRequest<T> {
  on: {
    init: (dontRestartData?: boolean) => void;
    success: (data: T) => void;
    error: (message?: string | string[]) => void;
    reset: () => void;
    getState: () => IRequest<T>;
  };
}

export default IRequestMethods;
