---
sidebar_position: 3
---

# useDependenciesAdapter

Docusaurus can manage multiple versions of your docs.

```tsx title="Component.tsx"
import { FC } from "react";
import { useDependenciesAdapter } from "@rodlopez/clean-code";

import UseCaseGetData from "/src/UseCaseGetData";

import useExampleState from "/src/useExampleState";
import useExampleRepository from "/src/useExampleRepository";

const Component: FC = () => {
  const state = useExampleState();
  const repository = useExampleRepository();

  // highlight-next-line
  useDependenciesAdapter(UseCaseGetData({ state, repository }), [
    state.visible,
  ]);

  return (
    <div>
      <button onClick={() => state.toogle()}>Toogle</button>
    </div>
  );
};
```
