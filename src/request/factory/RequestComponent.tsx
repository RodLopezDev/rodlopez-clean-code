import { ReactElement } from "react";
import useRequest from "./useRequest";
import AsyncRequestRender from "./AsyncRequestRender";

interface Props<ENTITY, ERROR = string> {
  method: Promise<ENTITY>;
  render: (entity: ENTITY, reload: () => Promise<void>) => ReactElement;
  loading?: ReactElement;
  error?: (errorObject: ERROR, reload: () => Promise<void>) => ReactElement;
}

const RequestComponent = function RequestComponent<ENTITY, ERROR = string>(
  props: Props<ENTITY, ERROR>
) {
  const { render, error, method, loading } = props;
  const request = useRequest<ENTITY, ERROR>({
    method,
  });
  const defaultComponent = () => <></>;
  const onReload = () => request.traceAsync(method);
  return (
    <AsyncRequestRender<ENTITY, ERROR>
      initialFetching
      request={request}
      Render={(entity) => render(entity, onReload)}
      RenderError={(errorObject) =>
        error?.(errorObject, onReload) || defaultComponent()
      }
      RenderLoading={loading || defaultComponent()}
    />
  );
};

export default RequestComponent;
