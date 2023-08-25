import { IBaseRepository } from "../../types";
import { Runnable, RunnableWithParams, UseCaseConstructor } from "./types";

type RequestUseCase<
  STATE,
  REPOSITORY extends IBaseRepository,
  DATA = undefined
> = (
  init: UseCaseConstructor<STATE, REPOSITORY>
) => DATA extends undefined ? Runnable : RunnableWithParams<DATA>;

export default RequestUseCase;
