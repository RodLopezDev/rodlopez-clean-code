import { ReactElement } from "react";
import useRequest from "./useRequest";
import AsyncRequestRender from "./AsyncRequestRender";

interface Props<ENTITY, ERROR = string> {
  error?: (errorObject: ERROR) => ReactElement;
  render: (entity: ENTITY) => ReactElement;
}

const RequestComponent = function RequestComponent<ENTITY, ERROR = string>(
  props: Props<ENTITY, ERROR>
) {
  const { render, error } = props;
  const request = useRequest<ENTITY, ERROR>({
    isFetching: true,
  });
  const defaultError = () => <></>;
  return (
    <AsyncRequestRender<ENTITY, ERROR>
      initialFetching
      request={request}
      Render={render}
      RenderError={error || defaultError}
      RenderLoading={<div>Cargando...</div>}
    />
  );
};

export default RequestComponent;
