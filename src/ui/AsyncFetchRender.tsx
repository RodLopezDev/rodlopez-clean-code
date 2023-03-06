const AsyncFetchRender = function AsyncFetchRender<T>({
  data,
  hasError,
  isFetching,
  Render,
  RHasError,
  RIsFetching,
  RenderEmpty,
}: AsyncFetchRenderProps<T>) {
  if (isFetching) {
    return RIsFetching;
  }
  if (hasError) {
    return RHasError;
  }
  if (data) {
    return Render(data);
  }
  return RenderEmpty || null;
};

export default AsyncFetchRender;
