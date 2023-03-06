import * as React from "react";

const useDependenciesAdapter = function useDependenciesAdapter(
  prop: () => Promise<void> | void,
  dependencies: any[] = []
) {
  React.useEffect(() => {
    prop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
  return [prop];
};

export default useDependenciesAdapter;
