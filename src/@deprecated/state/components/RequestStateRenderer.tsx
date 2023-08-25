import { ReactElement } from "react";
import IRequest from "../domain/IRequest";
import { isValidFunction } from "../../helpers/types";

interface Props<T> {
  state: IRequest<T>;
  Render?: (data: T) => ReactElement;
  RenderError?: (data: string | string[]) => ReactElement;
  RenderLoading?: ReactElement;
  RenderEmpty?: ReactElement;
}

const RequestStateRenderer = function RequestStateRenderer<T>({
  state,
  Render,
  RenderError,
  RenderEmpty,
  RenderLoading,
}: Props<T>) {
  const { isReady, isFetching, hasError, errorMessage, data } = state;
  if (isFetching) {
    return RenderLoading || null;
  }
  if (hasError && isValidFunction(RenderError)) {
    return RenderError(errorMessage) || null;
  }
  if (!data) {
    return null;
  }
  if (!!isReady) {
    if (isValidFunction(Render)) {
      return Render(data);
    }
    return null;
  }
  return RenderEmpty || null;
};

export default RequestStateRenderer;
