---
sidebar_position: 3
---

# Use Case

Docusaurus can manage multiple versions of your docs.

```tsx title="UseCaseExample.ts"
import { IUseCase } from "@rodlopez/clean-code";

import IExampleState from "/src/IExampleState";
import IExampleRepository from "/src/IExampleRepository";

const UseCaseGetData: IUseCase<IExampleState, IExampleRepository> =
  ({ state, repository }) =>
  () => {
    // Logic bussiness
  };
```

Example of use case

```tsx title="UseCaseGetData.ts"
import { IUseCase } from "@rodlopez/clean-code";

import IExampleState from "/src/IExampleState";
import IExampleRepository from "/src/IExampleRepository";

const UseCaseGetData: IUseCase<IExampleState, IExampleRepository> =
  ({ state, repository }) =>
  async () => {
    try {
      state.on.init();
      const result = await repository.getData();
      state.on.success(result);
    } catch (e: any) {
      state.on.setError(e?.message);
    }
  };
```
