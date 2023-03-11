interface AsyncFetchRenderProps<T> {
  /** data loaded from fetch */
  data: T | null;
  /** flag */
  hasError: boolean;
  /** flag */
  isFetching: boolean;
  /** function that render component when fetch is wrong */
  RenderError: React.ReactElement;
  /** function that render component when fetch is working */
  RenderLoading: React.ReactElement;
  /** function that render component when fetch finished but data is empty */
  RenderEmpty?: React.ReactElement;
  /** function that render component when fetch finished with data */
  Render: (data: T) => React.ReactElement;
}
