---
sidebar_position: 1
---

# useRequest

Este hook genera un objeto con métodos para seguimiento de una petición a servidor.

```tsx title="RequestComponent.tsx"
import { useRequest } from "@rodlopez/clean-code";

interface TypeOfResult {
  name: string;
  email: string;
}

const RequestComponent = () => {
  // highlight-next-line
  const request = useRequest<TypeOfResult>({
    method: MockMethod<TypeOfResult>(),
  });
  return <div>{request.data?.name}</div>;
};
```

Ud. puede implementar este hook y realizare el seguimiento manualmente como en el siguiente ejemplo.

```tsx title="RequestComponent.tsx"
import { useEffect, useCallback } from "react";
import { useRequest } from "@rodlopez/clean-code";

interface TypeOfResult {
  name: string;
  email: string;
}

const RequestComponent = () => {
  const request = useRequest<TypeOfResult>();

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

Esta implementación permite mayor **control** y **extensión** de la funcionalidad del hook, pero puede usar el método [`traceAsync`](/docs/fetching/traceAsync) para abstraer el funcionamiento del método loadUser y el componente [`AsyncRequestRender`](/docs/fetching/AsyncRequestRender) para mejorar la lectura de las condiciones de UI.

:::
