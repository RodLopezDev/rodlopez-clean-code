//IMPORT PROJECT
import { AsyncFetchRender, useDebouncedEventAdapter } from "../../../src";

import Character from "../domain/entity/Character";
import useSearchState from "../infraestructure/state/useSearchState";
import UseCaseSearchCharacters from "../application/UseCaseSearchCharacters";
import useRickAndMortyRepository from "../infraestructure/repository/useRickAndMortyRepository";

const Search2 = () => {
  const state = useSearchState();
  const repository = useRickAndMortyRepository();

  const [debounce, submit] = useDebouncedEventAdapter(
    UseCaseSearchCharacters({ state, repository }),
    4000
  );

  const handleChangeInput = (e: any) => {
    state.setSearch(e.target?.value);
    debounce();
  };

  return (
    <div>
      <input value={state.search} onChange={handleChangeInput} />

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

export default Search2;
