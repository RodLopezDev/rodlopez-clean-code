export type UseCaseRunner = () => Promise<void> | void;
export type UseCaseRunnerWithParams<T> = (data: T) => Promise<void> | void;
