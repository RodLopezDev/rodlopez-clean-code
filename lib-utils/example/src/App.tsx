import AsyncronusLoading from "./use-cases/AsyncronusLoading";
import ErrorCase from "./use-cases/ErrorCase";
import FetchingWithHookComponent from "./use-cases/FetchingWithHook";
import FetchingWithHookAndTracingComponent from "./use-cases/FetchingWithHookAndTracing";
import FetchingWithTracingAndUIRender from "./use-cases/FetchingWithTracingAndUIRender";

function App() {
  return (
    <>
      <FetchingWithHookComponent delayTime={1000} pokemonName="pikachu" />
      <FetchingWithHookAndTracingComponent
        delayTime={2000}
        pokemonName="charmander"
      />
      <FetchingWithTracingAndUIRender
        delayTime={3000}
        pokemonName="dragonite"
      />
      <AsyncronusLoading delayTime={500} pokemonName="charizard" />
      <ErrorCase delayTime={3000} pokemonName="bad-name" />
    </>
  );
}

export default App;
