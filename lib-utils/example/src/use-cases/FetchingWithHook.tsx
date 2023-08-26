import { FC, useCallback, useEffect } from "react";
import useCleanFetching from "../../../../src/fetching/factory/useCleanFetching";

import { delay } from "./utils";
import { Pokemon } from "../Pokemon";
import PokemonUI from "../components/PokemonUI";
import LoadingUI from "../components/LoadingUI";

type exr = { message: string };

interface Props {
  delayTime?: number;
  pokemonName: string;
}

const FetchingWithHookComponent: FC<Props> = ({ delayTime, pokemonName }) => {
  const request = useCleanFetching<Pokemon>({ isFetching: true });

  const handlePokemon = useCallback(async () => {
    request.methods.init();
    try {
      await delay(delayTime || 0);
      const result = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      const json = await result.json();
      request.methods.success(json);
    } catch (e: unknown) {
      request.methods.error((e as exr)?.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handlePokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (request.isFetching) {
    return <LoadingUI />;
  }
  if (request.hasError) {
    return <div>{JSON.stringify(request.errorObject)}</div>;
  }
  if (!request.data) {
    throw new Error("CORNER_CASE");
  }
  return (
    <PokemonUI pokemon={request.data} strategy="Single fetching with hook" />
  );
};

export default FetchingWithHookComponent;
