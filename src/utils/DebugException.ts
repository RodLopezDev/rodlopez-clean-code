class DebugException extends Error {
  constructor(message: string) {
    super(message);
  }
}

export default DebugException;
