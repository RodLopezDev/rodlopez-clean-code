import IState from "../state/IState";
import IRepository from "../repository/IRepository";
import { UseCaseRunner, UseCaseRunnerWithParams } from "./types";

export type IBaseRepository = IRepository | IRepository[];

export interface UseCaseConstructor<STATE, REPOSITORY> {
  state: STATE;
  repository: REPOSITORY;
}

type AppUseCase<
  T extends IState,
  G extends IBaseRepository,
  DATA = undefined
> = (
  init: UseCaseConstructor<T, G>
) => DATA extends undefined ? UseCaseRunner : UseCaseRunnerWithParams<DATA>;

export default AppUseCase;
