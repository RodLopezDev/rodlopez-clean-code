import * as React from "react";

interface Props<T> {
  data: T | null;
  error: boolean;
  loading: boolean;
  RenderError: React.ReactElement;
  RenderLoading: React.ReactElement;
  RenderEmpty?: React.ReactElement;
  Render: (data: T) => React.ReactElement;
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
