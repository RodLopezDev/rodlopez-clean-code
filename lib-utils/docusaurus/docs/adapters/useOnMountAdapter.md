---
sidebar_position: 2
---

# useOnMountAdapter

Docusaurus can manage multiple versions of your docs.

```tsx title="Component.tsx"
import { FC } from "react";
import { useOnMountAdapter } from "@rodlopez/clean-code";

import UseCaseGetData from "/src/UseCaseGetData";

import useExampleState from "/src/useExampleState";
import useExampleRepository from "/src/useExampleRepository";

const Component: FC = () => {
  const state = useExampleState();
  const repository = useExampleRepository();

  // highlight-next-line
  useOnMountAdapter(UseCaseGetData({ state, repository }));

  return <button onClick={on}>Run</button>;
};
```
