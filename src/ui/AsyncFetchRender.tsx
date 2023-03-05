import { ReactElement } from "react";

interface Props<T> {
  data: T | null;
  error: boolean;
  loading: boolean;
  RenderError: ReactElement;
  RenderLoading: ReactElement;
  RenderEmpty?: ReactElement;
  Render: (data: T) => ReactElement;
}

const AsyncFetchRender = function AsyncFetchRender<T>({
  data,
  error,
  loading,
  Render,
  RenderError,
  RenderLoading,
  RenderEmpty,
}: Props<T>) {
  if (loading) {
    return RenderLoading;
  }
  if (error) {
    return RenderError;
  }
  if (data) {
    return Render(data);
  }
  return RenderEmpty || null;
};

export default AsyncFetchRender;
