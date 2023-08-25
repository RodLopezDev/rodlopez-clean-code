import * as React from "react";
import IRequestMethods from "../../../state/domain/IRequestMethods";

const useListenSuccess = function useListenSuccess<T>(
  state: IRequestMethods<T>,
  callback: (data: T) => void
) {
  React.useEffect(() => {
    if (!!state.isFetching) return;
    if (!!state.hasError) return;
    if (!state.data) return;
    callback(state.data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.data]);
};

export default useListenSuccess;
