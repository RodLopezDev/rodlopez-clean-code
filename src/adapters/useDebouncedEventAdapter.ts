import { useCallback } from "react";

const useDebouncedEventAdapter = function useDebouncedEventAdapter(
  prop: () => Promise<void> | void,
  time: number = 1000
) {
  let timeout: NodeJS.Timeout | null = null;
  const run = useCallback(() => {
    console.log("ACA PO");
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(prop, time);
  }, [time, timeout]);
  return [run, prop];
};

export default useDebouncedEventAdapter;
