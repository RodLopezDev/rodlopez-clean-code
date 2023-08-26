import EntityState from "./EntityState";
import MethodState from "./MethodState";

interface RequestState<ENTITY, ERROR = string>
  extends EntityState<ENTITY, ERROR> {
  methods: MethodState<ENTITY, ERROR>;
  traceAsync: (
    promise: Promise<ENTITY>,
    getError: (e: unknown) => ERROR
  ) => Promise<void>;
}

export default RequestState;
