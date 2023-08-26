---
sidebar_position: 1
---

# useRequest Custom

Ud. puede implementar este hook y realizare el seguimiento manualmente como en el siguiente ejemplo.

```tsx title="RequestComponent.tsx"
import { useEffect, useCallback } from "react";
import { useRequest } from "@rodlopez/clean-code";

interface TypeOfResult {
  name: string;
  email: string;
}

const RequestComponent = () => {
  const request = useRequest<TypeOfResult>({ isFetching: true });

  const loadUser = useCallback(async () => {
    // highlight-next-line
    request.on.init();
    try {
      const result = await Mock<TypeOfResult>();
      // highlight-next-line
      request.on.success(result);
    } catch (e) {
      // highlight-next-line
      request.on.error(e?.message);
    }
  }, []);

  useEffect(() => {
    loadUser();
  }, []);

  // highlight-next-line
  if (request.isFetching) {
    return <UIComponentForLoading />;
  }
  // highlight-next-line
  if (request.hasError) {
    return <UIComponentForError error={request.errorObject} />;
  }
  return <div>{request.data?.name}</div>;
};
```

En el método de ejemplo loadUser se pueden ver las 3 funciones principales del objeto generado por el hook.

Puedes usar el estado del objeto para condicionar la UI que se desea mostrar como se resalta en la segunda parte del componente.

:::info Importante

Esta implementación permite mayor **control** y **extensión** de la funcionalidad del hook, pero puede usar el método [`traceAsync`](/docs/request/traceAsync) para abstraer el funcionamiento del método loadUser y el componente [`AsyncRequestRender`](/docs/request/AsyncRequestRender) para mejorar la lectura de las condiciones de UI. O directamente ocupar el parámetro `method` en el hook como en el [ejemplo inicial](/docs/request/useRequest) .

:::
