// IMPORT PROJECT
import { IUseCase } from "../../../src";

import ISearchState from "../domain/state/ISearchState";
import IRickAndMortyRepository from "../domain/repository/IRickAndMortyRepository";

const UseCaseSearchCharacters: IUseCase<
  ISearchState,
  IRickAndMortyRepository
> =
  ({ state, repository }) =>
  async () => {
    try {
      state.service.on.init();
      const result = await repository.getByNameCharacters(state.search);
      state.service.on.success(result);
    } catch (e: any) {
      state.service.on.error(e?.message);
    }
  };

export default UseCaseSearchCharacters;
