// IMPORT PROJECT
import { IUseCase } from "../../../src";

import ICharactersState from "../domain/state/ICharactersState";
import IRickAndMortyRepository from "../domain/repository/IRickAndMortyRepository";

const UseCaseGetAllCharacters: IUseCase<
  ICharactersState,
  IRickAndMortyRepository
> =
  ({ state, repository }) =>
  async () => {
    try {
      state.on.init();
      const result = await repository.getAllCharacters();
      state.on.success(result);
    } catch (e: any) {
      state.on.error(e?.message);
    }
  };

export default UseCaseGetAllCharacters;
