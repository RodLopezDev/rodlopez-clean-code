---
sidebar_position: 1
---

# Repository

Docusaurus can manage multiple versions of your docs.

```ts title="IExampleRepository.ts"
// highlight-next-line
import { IRepository } from "@rodlopez/clean-code";

// highlight-next-line
interface IExampleRepository extends IRepository {
  getData: () => Promise<string>;
}
```

```tsx title="useExampleRepository.ts"
import { IExampleRepository } from "/IExampleRepository";

// highlight-next-line
const useExampleRepository = (): IExampleRepository {
    const getData = async () => {
      const result = await fetch("/some-url");
      return await result.json();
    }
    return { getData }
}
```
