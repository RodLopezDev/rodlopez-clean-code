import EntityState from "../types/EntityState";
import {
  ErrorMiddleware,
  SingleMiddleware,
  SuccessMiddleware,
} from "../types/RequestStateMiddleware";

export const generateSigleMiddleware = (
  init?: SingleMiddleware | SingleMiddleware[] | undefined
): undefined | (() => void) => {
  return init
    ? () => {
        if (init && typeof init === "function") {
          init();
        } else if (Array.isArray(init)) {
          init?.forEach((md) => {
            md();
          });
        }
      }
    : undefined;
};

export function generateErrorMiddleware<ENTITY, ERROR = string>(
  error?: ErrorMiddleware<ERROR> | ErrorMiddleware<ERROR>[] | undefined
) {
  return error
    ? (state: EntityState<ENTITY, ERROR>) => {
        if (error && typeof error === "function") {
          error(state.errorObject);
        } else if (Array.isArray(error)) {
          error?.forEach((md) => {
            md(state.errorObject);
          });
        }
      }
    : undefined;
}

export function generateSuccessMiddleware<ENTITY, ERROR = string>(
  success?: SuccessMiddleware<ENTITY> | SuccessMiddleware<ENTITY>[] | undefined
) {
  return success
    ? (state: EntityState<ENTITY, ERROR>) => {
        if (!state.data) return;
        if (success && typeof success === "function") {
          success(state.data);
        } else if (Array.isArray(success)) {
          success?.forEach((md) => {
            if (!state.data) return;
            md(state.data);
          });
        }
      }
    : undefined;
}
