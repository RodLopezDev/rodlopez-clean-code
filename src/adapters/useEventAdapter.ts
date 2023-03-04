const useEventAdapter = function useEventAdapter(
  prop: () => Promise<void> | void
): [() => Promise<void> | void] {
  return [prop];
};

export default useEventAdapter;
