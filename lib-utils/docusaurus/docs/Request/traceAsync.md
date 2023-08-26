---
sidebar_position: 4
---

# traceAsync

Abstrae el seguimiento de la request y recibe como segundo parametro la promesa que retorna el objeto resultando de la request.

```tsx title="RequestComponent.tsx"
import {
  traceAsync,
  useCleanFetching,
  AsyncRequestRender,
} from "@rodlopez/clean-code";

interface TypeOfResult {
  name: string;
  email: string;
}

const RequestComponent = () => {
  const state = useCleanFetching<TypeOfResult, any>();

  const mockPromise = async (): Promise<TypeOfResult> => {...};

  useEffect(() => {
    // highlight-next-line
    state.traceAsync(mockPromise);
  }, []);

  return <AsyncRequestRender state={state} />;
};
```

:::caution Importante

El segundo genérico recibido por el hook **useCleanFetching** representa el tipado del objeto de error que se recibe, al usar traceAsync lo recomendable es ocupar `any` o de preferencia `unknown`

:::
