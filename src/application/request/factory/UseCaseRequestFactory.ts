import { IBaseRepository } from "../../types";
import RequestUseCase from "../domain/RequestUseCase";
import { ICallbackErrorFunction, ICallbackFunction } from "../domain/types";

const UseCaseRequestFactory = function UseCaseRequestFactory<
  ENTITY,
  REPOSITORY extends IBaseRepository,
  PROP = undefined
>(
  callbackAction: ICallbackFunction<ENTITY, REPOSITORY, PROP>,
  callbackError?: ICallbackErrorFunction<ENTITY>
): RequestUseCase<ENTITY, REPOSITORY, PROP> {
  return ({ state, repository }) =>
    //@ts-ignore
    async (prop: PROP) => {
      if (!!state.isFetching) return;
      try {
        state.on.init();
        const oResponse = await callbackAction(repository)(prop);
        state.on.success(oResponse as ENTITY);
      } catch (error) {
        if (callbackError) {
          callbackError(state, error);
          return;
        }
        throw error;
      }
    };
};

export default UseCaseRequestFactory;
