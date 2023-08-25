import IRequest from "../../../state/domain/IRequest";
import IRequestMethods from "../../../state/domain/IRequestMethods";

export type Runnable = () => Promise<void> | void;

export type RunnableWithParams<T> = (data: T) => Promise<void> | void;

export interface UseCaseConstructor<STATE, REPOSITORY> {
  state: IRequestMethods<STATE>;
  repository: REPOSITORY;
}

export type ICallbackFunction<ENTITY, REPOSITORY, PROP = undefined> = (
  repository: REPOSITORY
) => PROP extends undefined
  ? () => Promise<ENTITY>
  : (data: PROP) => Promise<ENTITY>;

export type ICallbackErrorFunction<E> = (
  state: IRequest<E>,
  error: any
) => void;
