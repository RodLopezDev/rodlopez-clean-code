import { FC, useCallback, useEffect } from "react";
import useCleanFetching from "../../../../src/fetching/factory/useCleanFetching";

import { delay } from "./utils";
import { Pokemon } from "../Pokemon";
import PokemonUI from "../components/PokemonUI";
import LoadingUI from "../components/LoadingUI";

interface Props {
  delayTime?: number;
  pokemonName: string;
}

const FetchingWithHookAndTracingComponent: FC<Props> = ({
  delayTime,
  pokemonName,
}) => {
  const request = useCleanFetching<Pokemon>({ isFetching: true });

  const handlePokemon = useCallback(async () => {
    await delay(delayTime || 0);
    const result = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    return (await result.json()) as Pokemon;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    request.traceAsync(handlePokemon());
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
    <PokemonUI
      pokemon={request.data}
      strategy="Fetching with hook and traceAsync method"
    />
  );
};

export default FetchingWithHookAndTracingComponent;
