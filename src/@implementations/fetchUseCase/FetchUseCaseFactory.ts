import AppUseCase, { IBaseRepository } from "../../application/AppUseCase";
import IFetchingState from "../../@implementations/fetchStore/IFetchingState";

type ICallbackFunction<E, R, D> = (
  repository: R
) => D extends undefined ? () => Promise<E> : (data: D) => Promise<E>;

type ICallbackErrorFunction<E> = (
  state: IFetchingState<E>,
  error: Error
) => void;

// E: Entity
// R: Repository
// D: Use case data
const FetchUseCaseFactory = function FetchUseCaseFactory<
  E,
  R extends IBaseRepository,
  D = undefined
>(
  callbackAction: ICallbackFunction<E, R, D>,
  callbackError?: ICallbackErrorFunction<E>
): AppUseCase<IFetchingState<E>, R, D> {
  return ({ state, repository }) =>
    //@ts-ignore
    async (data: DATA) => {
      if (!!state.isFetching) return;
      try {
        state.on.init();
        const oResponse = await callbackAction(repository)(data);
        state.on.success(oResponse as E);
      } catch (error) {
        if (callbackError) {
          callbackError(state, new Error(error));
        }
      }
    };
};

export default FetchUseCaseFactory;
