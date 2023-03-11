// IMPORT PROJECT
import { useFetchingState } from "../../../../src";

import Character from "../../domain/entity/Character";
import ICharactersState from "../../domain/state/ICharactersState";

const useCharactersState = (): ICharactersState =>
  useFetchingState<Character[]>();

export default useCharactersState;
