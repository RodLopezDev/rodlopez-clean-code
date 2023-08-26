---
sidebar_position: 1
---

# useEventAdapter

Docusaurus can manage multiple versions of your docs.

```tsx title="Component.tsx"
import { FC } from "react";
import { useEventAdapter } from "@rodlopez/clean-code";

import UseCaseGetData from "/src/UseCaseGetData";

import useExampleState from "/src/useExampleState";
import useExampleRepository from "/src/useExampleRepository";

const Component: FC = () => {
  const state = useExampleState();
  const repository = useExampleRepository();

  // highlight-next-line
  const [on] = useEventAdapter(UseCaseGetData({ state, repository }));

  return <button onClick={on}>Run</button>;
};
```
