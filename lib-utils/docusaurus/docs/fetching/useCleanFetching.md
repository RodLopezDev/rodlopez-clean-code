---
sidebar_position: 1
---

# useCleanFetching

Este hook genera un objeto con métodos para seguimiento de una petición a servidor.

```tsx title="RequestComponent.tsx"
import { useCleanFetching } from "@rodlopez/clean-code";

interface TypeOfResult {
  name: string;
  email: string;
}

const RequestComponent = () => {
  // highlight-next-line
  const state = useCleanFetching<TypeOfResult>();
  .
  .
  .
  return <div>{state.data?.name}</div>;
};
```

Ud. puede implementar este hook y realizare el seguimiento manualmente como en el siguiente ejemplo.

```tsx title="RequestComponent.tsx"
import { useEffect, useCallback } from "react";
import { useCleanFetching } from "@rodlopez/clean-code";

interface TypeOfResult {
  name: string;
  email: string;
}

const RequestComponent = () => {
  const state = useCleanFetching<TypeOfResult>();

  const loadUser = useCallback(async () => {
    // highlight-next-line
    state.on.init();
    try {
      const result = await Mock<TypeOfResult>();
      // highlight-next-line
      state.on.success(result);
    } catch (e) {
      // highlight-next-line
      state.on.error(e?.message);
    }
  }, []);

  useEffect(() => {
    loadUser();
  }, []);

  // highlight-next-line
  if (state.isFetching) {
    return <UIComponentForLoading />;
  }
  // highlight-next-line
  if (state.hasError) {
    return <UIComponentForError error={state.errorObject} />;
  }
  return <div>{state.data?.name}</div>;
};
```

En el método de ejemplo loadUser se pueden ver las 3 funciones principales del objeto generado por el hook.

Puedes usar el estado del objeto para condicionar la UI que se desea mostrar como se resalta en la segunda parte del componente.

:::info Importante

Esta implementación permite mayor **control** y **extensión** de la funcionalidad del hook, pero puede usar el método [`traceAsync`](/docs/fetching/traceAsync) para abstraer el funcionamiento del método loadUser y el componente [`AsyncRequestRender`](/docs/fetching/AsyncRequestRender) para mejorar la lectura de las condiciones de UI.

:::
