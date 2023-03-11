const AsyncFetchRender = function AsyncFetchRender<T>({
  data,
  hasError,
  isFetching,
  Render,
  RenderError,
  RenderLoading,
  RenderEmpty,
}: AsyncFetchRenderProps<T>) {
  if (isFetching) {
    return RenderLoading;
  }
  if (hasError) {
    return RenderError;
  }
  if (data) {
    return Render(data);
  }
  return RenderEmpty || null;
};

export default AsyncFetchRender;
