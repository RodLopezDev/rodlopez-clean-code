import AsyncronusLoading from "./use-cases/AsyncronusLoading";
import ErrorCase from "./use-cases/ErrorCase";
import ErrorCaseWithComponent from "./use-cases/ErrorCaseWithComponent";
import FetchingWithHookComponent from "./use-cases/FetchingWithHook";
import FetchingWithHookAndTracingComponent from "./use-cases/FetchingWithHookAndTracing";
import FetchingWithMethod from "./use-cases/FetchingWithMethod";
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
      <ErrorCaseWithComponent delayTime={2000} pokemonName="charmileon" />
      <FetchingWithMethod delayTime={1000} pokemonName="squirtle" />
    </>
  );
}

export default App;
