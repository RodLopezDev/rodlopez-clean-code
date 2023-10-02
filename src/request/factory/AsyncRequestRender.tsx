import { ReactElement } from "react";
import EntityState from "../types/EntityState";

interface Props<ENTITY, ERROR = string> {
  initialFetching?: boolean;
  request: EntityState<ENTITY, ERROR>;
  RenderLoading: ReactElement;
  RenderNone?: ReactElement;
  Render: (entity: ENTITY) => ReactElement;
  RenderError: (errorObject: ERROR) => ReactElement;
}

const AsyncRequestRender = function AsyncRequestRender<ENTITY, ERROR = string>(
  props: Props<ENTITY, ERROR>
) {
  if (props?.request.isFetching) {
    return props?.RenderLoading;
  }
  if (props?.request.hasError) {
    return props?.RenderError(props?.request.errorObject);
  }
  if (!props?.request.data) {
    if (!!props?.initialFetching) {
      return props?.RenderLoading;
    }
    return props?.RenderNone ?? props?.RenderLoading;
  }
  return props?.Render(props?.request.data);
};

export default AsyncRequestRender;
