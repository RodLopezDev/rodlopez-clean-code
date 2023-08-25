import * as React from "react";
import IRequestMethods from "../../../state/domain/IRequestMethods";

const useResetError = function useResetError<T>(
  state: IRequestMethods<T>,
  miliseconds: number = 1000
) {
  React.useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (state.hasError) {
      interval = setTimeout(() => {
        state.on.reset();
      }, miliseconds);
    } else {
      interval = null;
    }
    return () => {
      interval && clearTimeout(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.hasError]);
};

export default useResetError;
