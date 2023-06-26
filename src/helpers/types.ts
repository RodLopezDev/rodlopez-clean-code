export const isValidFunction = (fun?: Function): fun is Function =>
  !!fun && typeof fun === "function";
