// IMPORT PROJECT
import { AsyncFetchRender, useOnMountAdapter } from "../../../src";

import Character from "../domain/entity/Character";
import UseCaseGetAllCharacters from "../application/UseCaseGetAllCharacters";
import useCharactersState from "../infraestructure/state/useCharactersState";
import useRickAndMortyRepository from "../infraestructure/repository/useRickAndMortyRepository";

function Home() {
  const state = useCharactersState();
  const repository = useRickAndMortyRepository();

  const [retry] = useOnMountAdapter(
    UseCaseGetAllCharacters({ state, repository })
  );

  return (
    <AsyncFetchRender<Character[]>
      data={state.data}
      hasError={state.hasError}
      isFetching={state.isFetching}
      RenderError={
        <div>
          Error
          <br />
          <button onClick={retry}>Reintentar</button>
        </div>
      }
      RenderLoading={<div>Cargando...</div>}
      Render={(e: Character[]) => (
        <div>
          <ul>
            {e.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
      RenderEmpty={
        <div>
          <button onClick={retry}>Cargar</button>
        </div>
      }
    />
  );
}

export default Home;
