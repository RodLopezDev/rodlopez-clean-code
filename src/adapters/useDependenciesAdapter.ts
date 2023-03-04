import { useEffect } from "react";

const useDependenciesAdapter = function useDependenciesAdapter(
  prop: () => Promise<void> | void,
  dependencies: any[] = []
) {
  useEffect(() => {
    prop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
  return [prop];
};

export default useDependenciesAdapter;
