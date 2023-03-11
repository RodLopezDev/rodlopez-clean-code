// IMPORT PROJECT
import { Dispatch, SetStateAction } from "react";
import { IFetchingState } from "../../../../src";

import Character from "../entity/Character";

interface ISearchState {
  service: IFetchingState<Character[]>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

export default ISearchState;
