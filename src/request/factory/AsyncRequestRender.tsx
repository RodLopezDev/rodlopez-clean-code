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
  const {
    request,
    Render,
    RenderError,
    RenderLoading,
    RenderNone,
    initialFetching,
  } = props;
  if (request.isFetching) {
    return RenderLoading;
  }
  if (request.hasError) {
    return RenderError(request.errorObject);
  }
  if (!request.data) {
    if (!!initialFetching) {
      throw new Error("ERROR_PROCESSING");
    }
    return RenderNone ?? RenderLoading;
  }
  return Render(request.data);
};

export default AsyncRequestRender;
