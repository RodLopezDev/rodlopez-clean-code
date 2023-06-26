import { IBaseRepository } from "../../types";
import BasicUseCase from "../domain/BasicUseCase";
import { ICallbackErrorFunction, ICallbackFunction } from "../domain/types";

const UseCaseBasicFactory = function UseCaseBasicFactory<
  ENTITY,
  REPOSITORY extends IBaseRepository,
  PROP = undefined
>(
  callbackAction: ICallbackFunction<ENTITY, REPOSITORY, PROP>,
  callbackError?: ICallbackErrorFunction<ENTITY>
): BasicUseCase<ENTITY, REPOSITORY, PROP> {
  return ({ repository }) =>
    //@ts-ignore
    async (prop: PROP) => {
      try {
        const oResponse = await callbackAction(repository)(prop);
        return oResponse;
      } catch (error) {
        if (callbackError) {
          callbackError(error);
          return;
        }
        throw error;
      }
    };
};

export default UseCaseBasicFactory;
