import DebugException from "./DebugException";
import BussinessException from "./BussinessException";
import RepositoryException from "./RepositoryException";

export function HandleCleanException(
  error: any,
  callback: (message: string) => void
) {
  if (
    error instanceof BussinessException ||
    error instanceof RepositoryException
  ) {
    callback(String(error?.message));
    return;
  }
  if (error instanceof DebugException) {
    alert(`DebugException: ${error?.message}`);
    return;
  }
  alert(`Exception: ${(error as any)?.message || ""}`);
}
