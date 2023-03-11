// IMPORT PROJECT
import { useState } from "react";
//IMPORT PROJECT
import { useFetchingState } from "../../../../src";

import Character from "../../domain/entity/Character";
import ISearchState from "../../domain/state/ISearchState";

const useSearchState = (): ISearchState => {
  const [search, setSearch] = useState("");
  const service = useFetchingState<Character[]>();
  return { service, search, setSearch };
};

export default useSearchState;
