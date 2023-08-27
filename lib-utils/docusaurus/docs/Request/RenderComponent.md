---
sidebar_position: 2
---

# RenderComponent

Este hook genera un objeto con métodos para seguimiento de una petición a servidor.

```tsx title="RequestComponent.tsx"
import { RequestComponent } from "@rodlopez/clean-code";

interface User {
  name: string;
  email: string;
}

class Repository {
  async getUser() {
    return { ...mock };
  }
}

const MyComponent = () => {
  const repository = new Repository();
  return (
    <RequestComponent<User>
      method={repository.getUser()}
      loading={<div>Cargando...</div>}
      render={(user: User) => <div>{user?.name}</div>}
      error={(error: string) => <div>Error: {error}</div>}
    />
  );
};

export default MyComponent;
```

:::info Importante

Este componente incluye funciones de feedback en caso de un error al realizarse la request.
:::

```tsx title="RequestComponent.tsx"
import { RequestComponent } from "@rodlopez/clean-code";

interface User {
  name: string;
  email: string;
}

class Repository {
  async getUser() {
    return { ...mock };
  }
}

const MyComponent = () => {
  const repository = new Repository();
  return (
    <RequestComponent<User>
      method={repository.getUser()}
      loading={<div>Cargando...</div>}
      render={(user: User, reload) => (
        <div>
          <button onClick={reload}>Actualizar</button>
          {user?.name}
        </div>
      )}
      error={(error: string, reload) => (
        <div>
          Error: {error}
          <button onClick={reload}>Reintentar</button>
        </div>
      )}
    />
  );
};

export default MyComponent;
```
