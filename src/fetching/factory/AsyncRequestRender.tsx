import { ReactElement } from "react";
import EntityState from "../types/EntityState";

interface Props<ENTITY, ERROR = string> {
  initialFetching?: boolean;
  state: EntityState<ENTITY, ERROR>;
  RenderLoading: ReactElement;
  Render: (entity: ENTITY) => ReactElement;
  RenderError: (errorObject: ERROR) => ReactElement;
}

const AsyncRequestRender = function AsyncRequestRender<ENTITY, ERROR = string>(
  props: Props<ENTITY, ERROR>
) {
  const { state, Render, RenderError, RenderLoading, initialFetching } = props;
  if (state.isFetching) {
    return RenderLoading;
  }
  if (state.hasError) {
    return RenderError(state.errorObject);
  }
  if (!state.data) {
    if (!!initialFetching) {
      throw new Error("ERROR_PROCESSING");
    }
    return RenderLoading;
  }
  return Render(state.data);
};

export default AsyncRequestRender;
