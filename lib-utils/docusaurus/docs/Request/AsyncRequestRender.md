---
sidebar_position: 3
---

# AsyncRequestRender

Componente que abstrae todo el comportamiento de renderizado del estado de la request.

```tsx title="RequestComponent.tsx"
import { useRequest, AsyncRequestRender } from "@rodlopez/clean-code";

interface IUser {
  name: string;
  email: string;
}

const RequestComponent = () => {
  const request = useRequest<IUser>({ method: mockPromise });
  // highlight-next-line
  return (
    <AsyncRequestRender
      request={request}
      RenderLoading={<MyLoadingUIMock />}
      Render={(user) => <MyUserUIMock />}
      RenderError={(errorObject) => <MyErrorUIMock error={errorObject} />}
    />
  );
};
```

:::info Importante

Esta implementación permite mayor **control** y **extensión** de la funcionalidad del hook, pero puede usar el método [`traceAsync`](#) para abstraer el funcionamiento del método loadUser y el componente [`AsyncRequestRender`](#) para mejorar la lectura de las condiciones de UI.

:::
