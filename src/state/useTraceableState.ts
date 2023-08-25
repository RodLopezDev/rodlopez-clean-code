import {
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type CallbackType<TYPE> = (value: TYPE) => void;

const useTraceableState = function useStateWithCallback<STATE>(
  initialValue: STATE
): [
  STATE,
  (
    newValue: SetStateAction<STATE> | STATE,
    callback?: CallbackType<STATE>
  ) => void
] {
  const callbackRef = useRef<CallbackType<STATE> | null>(null);
  const [value, setValue] = useState<STATE>(initialValue);

  useEffect(() => {
    if (callbackRef.current) {
      callbackRef.current(value);
      callbackRef.current = null;
    }
  }, [value]);

  const setValueWithCallback = useCallback(
    (
      newValue: SetStateAction<STATE> | STATE,
      callback?: CallbackType<STATE>
    ) => {
      if (callback && typeof callback === "function") {
        callbackRef.current = callback;
      }
      return setValue(newValue);
    },
    []
  );

  return [value, setValueWithCallback];
};

export default useTraceableState;
