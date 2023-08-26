import { FC } from "react";
import { AsyncRequestRender, useRequest } from "../../../../src";

import { delay } from "./utils";
import { Pokemon } from "../Pokemon";
import PokemonUI from "../components/PokemonUI";
import LoadingUI from "../components/LoadingUI";

interface Props {
  delayTime?: number;
  pokemonName: string;
}

class Repository {
  getPokemon = async (pokemonName: string, delayTime: number = 0) => {
    await delay(delayTime);
    const result = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const json = await result.json();
    return json as Pokemon;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };
}

const FetchingWithMethod: FC<Props> = ({ delayTime, pokemonName }) => {
  const repository = new Repository();
  const request = useRequest<Pokemon>({
    method: repository.getPokemon(pokemonName, delayTime),
  });
  return (
    <AsyncRequestRender<Pokemon>
      initialFetching
      request={request}
      RenderLoading={<LoadingUI />}
      RenderError={(errorObject) => <div>{JSON.stringify(errorObject)}</div>}
      Render={(pk) => (
        <PokemonUI pokemon={pk} strategy="With Method (Repository)" />
      )}
    />
  );
};

export default FetchingWithMethod;
