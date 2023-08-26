import { FC, useCallback, useEffect } from "react";
import useCleanFetching from "../../../../src/fetching/factory/useCleanFetching";
import AsyncRequestRender from "../../../../src/fetching/factory/AsyncRequestRender";

import { delay } from "./utils";
import { Pokemon } from "../Pokemon";
import PokemonUI from "../components/PokemonUI";
import LoadingUI from "../components/LoadingUI";
import BaseBox from "../components/BaseBox";

interface Props {
  delayTime?: number;
  pokemonName: string;
}

const AsyncronusLoading: FC<Props> = ({ delayTime, pokemonName }) => {
  const request = useCleanFetching<Pokemon>();

  const handlePokemon = useCallback(async () => {
    await delay(delayTime || 0);
    const result = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    return (await result.json()) as Pokemon;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      request.traceAsync(handlePokemon());
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AsyncRequestRender<Pokemon>
      state={request}
      RenderNone={<BaseBox>Esperando para carga</BaseBox>}
      RenderLoading={<LoadingUI />}
      RenderError={(errorObject) => <div>{JSON.stringify(errorObject)}</div>}
      Render={(pk) => <PokemonUI pokemon={pk} strategy="Async loading" />}
    />
  );
};

export default AsyncronusLoading;
