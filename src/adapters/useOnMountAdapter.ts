import * as React from "react";

const useOnMountAdapter = function useOnMountAdapter(
  prop: () => Promise<void> | void
) {
  React.useEffect(() => {
    prop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [prop];
};

export default useOnMountAdapter;
