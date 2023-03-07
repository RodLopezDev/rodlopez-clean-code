---
sidebar_position: 2
---

# State

Docusaurus can manage multiple versions of your docs.

```ts title="IExampleRepository.ts"
// highlight-next-line
import { IState } from "@rodlopez/clean-code";

// highlight-next-line
interface IExampleState extends IState {
  getData: () => Promise<string>;
}
```

```tsx title="useExampleState.ts"
import { useState } from "react";
import { IExampleState } from "/IExampleState";

// highlight-next-line
const useExampleState = (): IExampleState {
    const [flag, setfFlag] = useState(false);
    return { flag, setfFlag }
}
```
