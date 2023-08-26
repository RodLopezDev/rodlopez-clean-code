import { ReactElement } from "react";
import useRequest from "./useRequest";
import AsyncRequestRender from "./AsyncRequestRender";

interface Props<ENTITY, ERROR = string> {
  method: Promise<ENTITY>;
  render: (entity: ENTITY) => ReactElement;
  loading?: ReactElement;
  error?: (errorObject: ERROR) => ReactElement;
}

const RequestComponent = function RequestComponent<ENTITY, ERROR = string>(
  props: Props<ENTITY, ERROR>
) {
  const { render, error, method, loading } = props;
  const request = useRequest<ENTITY, ERROR>({
    method: Promise.resolve({} as ENTITY),
  });
  const defaultComponent = () => <></>;
  return (
    <AsyncRequestRender<ENTITY, ERROR>
      initialFetching
      request={request}
      Render={render}
      RenderError={error || defaultComponent}
      RenderLoading={loading || defaultComponent()}
    />
  );
};

export default RequestComponent;
