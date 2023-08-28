import { FC, useCallback, useEffect, useRef } from "react";

import { delay } from "./utils";
import { Pokemon } from "../Pokemon";
import ErrorUI from "../components/ErrorUI";
import PokemonUI from "../components/PokemonUI";
import LoadingUI from "../components/LoadingUI";
import { RequestComponent } from "../../../../src";

interface Props {
  delayTime?: number;
  pokemonName: string;
}

const ErrorCaseWithComponent: FC<Props> = ({ delayTime, pokemonName }) => {
  const value = useRef("bad-name");
  const handlePokemon = useCallback(async () => {
    await delay(delayTime || 0);
    const result = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${value.current}`
    );
    if (result.status === 404) {
      throw new Error("POKEMON_NOT_FOUND");
    }
    return (await result.json()) as Pokemon;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <RequestComponent<Pokemon>
      method={handlePokemon}
      loading={<LoadingUI />}
      error={(error, reload) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
          value.current = pokemonName;
        }, []);
        return <ErrorUI message={error} retry={reload} />;
      }}
      render={(pk) => <PokemonUI pokemon={pk} strategy="Async loading" />}
    />
  );
};

export default ErrorCaseWithComponent;
