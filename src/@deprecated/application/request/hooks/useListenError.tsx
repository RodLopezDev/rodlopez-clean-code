import * as React from "react";
import IRequestMethods from "../../../state/domain/IRequestMethods";

const useListenError = function useListenError<T>(
  state: IRequestMethods<T>,
  callback: (data: string | string[]) => void
) {
  React.useEffect(() => {
    if (!state.hasError) return;
    callback(state.errorMessage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.data]);
};

export default useListenError;
