---
sidebar_position: 1
---

# FetchingState

Docusaurus can manage multiple versions of your docs.

```tsx title="useExtendedFetchingState.ts"
// highlight-next-line
import { IFetchingState, useFetchingState } from "@rodlopez/clean-code";

// highlight-next-line
interface IExtendedFetchingState extends IFetchingState<string> {
  // another props
  flag: boolean;
}

// highlight-next-line
const useExtendedFetchingState = (): IExtendedFetchingState => {
  const [flag, setState] = useState(false);
  // highlight-next-line
  const fetchingState = useFetchingState<string>();
  return { ...fetchingState, flag };
};
```

```tsx title="IFetchingState.ts"
interface IFetchingState<T> extends IState {
  isFetching: boolean;
  hasError: boolean;
  errorMessage: string;
  data: T | null;
  on: {
    init: () => void;
    success: (data: T) => void;
    error: (message?: string) => void;
    reset: () => void;
  };
}
```
