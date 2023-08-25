import { ReactElement } from "react";
import useCleanFetching from "./useCleanFetching";
import AsyncRequestRender from "./AsyncRequestRender";

interface Props<ENTITY, ERROR = string> {
  error?: (errorObject: ERROR) => ReactElement;
  render: (entity: ENTITY) => ReactElement;
}

const FetchingComponent = function FetchingComponent<ENTITY, ERROR = string>(
  props: Props<ENTITY, ERROR>
) {
  const { render, error } = props;
  const state = useCleanFetching<ENTITY, ERROR>({
    isFetching: true,
  });
  const defaultError = () => <></>;
  return (
    <AsyncRequestRender<ENTITY, ERROR>
      initialFetching
      state={state}
      Render={render}
      RenderError={error || defaultError}
      RenderLoading={<div>Cargando...</div>}
    />
  );
};

export default FetchingComponent;
