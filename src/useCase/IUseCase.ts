import IState from "state/IState";
import IRepository from "repository/IRepository";

interface UseCaseDefinition<T, G> {
  state: T;
  repository: G;
}

type IUseCase<S extends IState, R extends IRepository> = (
  props: UseCaseDefinition<S, R>
) => () => Promise<void> | void;

export default IUseCase;
