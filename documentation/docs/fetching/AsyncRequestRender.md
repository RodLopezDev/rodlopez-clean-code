---
sidebar_position: 3
---

# AsyncRequestRender

Componente que abstrae todo el comportamiento de renderizado del estado de la request.

```tsx title="RequestComponent.tsx"
import { useCleanFetching, AsyncRequestRender } from "@rodlopez/clean-code";

interface TypeOfResult {
  name: string;
  email: string;
}

const RequestComponent = () => {
  const state = useCleanFetching<TypeOfResult>();
  // highlight-next-line
  return <AsyncRequestRender state={state} />;
};
```

:::info Importante

Esta implementación permite mayor **control** y **extensión** de la funcionalidad del hook, pero puede usar el método [`traceAsync`](#) para abstraer el funcionamiento del método loadUser y el componente [`AsyncRequestRender`](#) para mejorar la lectura de las condiciones de UI.

:::
