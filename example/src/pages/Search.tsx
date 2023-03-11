//IMPORT PROJECT
import { AsyncFetchRender, useEventAdapter } from "../../../src";

import Character from "../domain/entity/Character";
import useSearchState from "../infraestructure/state/useSearchState";
import UseCaseSearchCharacters from "../application/UseCaseSearchCharacters";
import useRickAndMortyRepository from "../infraestructure/repository/useRickAndMortyRepository";

const Search = () => {
  const state = useSearchState();
  const repository = useRickAndMortyRepository();

  const [submit] = useEventAdapter(
    UseCaseSearchCharacters({ state, repository })
  );

  const handleChangeInput = (e: any) => {
    state.setSearch(e.target?.value);
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input value={state.search} onChange={handleChangeInput} />
        <button type="submit">Buscar</button>
      </form>

      <AsyncFetchRender<Character[]>
        data={state.service.data}
        hasError={state.service.hasError}
        isFetching={state.service.isFetching}
        RenderError={
          <div>
            Error
            <br />
            <button onClick={submit}>Reintentar</button>
          </div>
        }
        RenderLoading={<div>Cargando...</div>}
        Render={(data: Character[]) => (
          <ul>
            {data.map((e) => (
              <li key={e.id}>{e.name}</li>
            ))}
          </ul>
        )}
      />
    </div>
  );
};

export default Search;
