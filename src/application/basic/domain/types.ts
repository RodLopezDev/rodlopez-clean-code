export type Runnable<RESULT> = () => Promise<RESULT> | RESULT;

export type RunnableWithParams<PROP, RESULT> = (
  data: PROP
) => Promise<RESULT> | RESULT;

export interface UseCaseConstructor<REPOSITORY> {
  repository: REPOSITORY;
}

export type ICallbackFunction<ENTITY, REPOSITORY, PROP = undefined> = (
  repository: REPOSITORY
) => PROP extends undefined
  ? () => Promise<ENTITY>
  : (data: PROP) => Promise<ENTITY>;

export type ICallbackErrorFunction<E> = (error: any) => void;
