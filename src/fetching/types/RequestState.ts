import EntityState from "./EntityState";
import MethodState from "./MethodState";

interface RequestState<ENTITY, ERROR = string>
  extends EntityState<ENTITY, ERROR> {
  on: MethodState<ENTITY, ERROR>;
}

export default RequestState;
