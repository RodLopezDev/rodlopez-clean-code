import { IBaseRepository } from "../../types";
import { Runnable, RunnableWithParams, UseCaseConstructor } from "./types";

type BasicUseCase<
  RESULT,
  REPOSITORY extends IBaseRepository,
  PROP = undefined
> = (
  init: UseCaseConstructor<REPOSITORY>
) => PROP extends undefined
  ? Runnable<RESULT>
  : RunnableWithParams<PROP, RESULT>;

export default BasicUseCase;
