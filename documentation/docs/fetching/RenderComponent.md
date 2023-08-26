---
sidebar_position: 2
---

# RenderComponent

Este hook genera un objeto con métodos para seguimiento de una petición a servidor.

```tsx title="RequestComponent.tsx"
import { FetchingComponent } from "@rodlopez/clean-code";

interface TypeOfResult {
  name: string;
  email: string;
}

const RequestComponent = () => {
  return (
    <FetchingComponent<TypeOfResult>
      error={(error: string) => <div>Error: {error}</div>}
      render={(user: TypeOfResult) => <div>{user?.name}</div>}
    />
  );
};
```

:::warning Importante

Este componente no incluye funciones de feedback en caso de un error al realizarse la request. Usar solo como HOC para aquellos procesos que **no requieren reintento**.
:::
