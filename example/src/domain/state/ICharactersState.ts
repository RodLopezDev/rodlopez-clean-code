// IMPORT PROJECT
import { IFetchingState } from "../../../../src";

import Character from "../entity/Character";

interface ICharactersState extends IFetchingState<Character[]> {}

export default ICharactersState;
