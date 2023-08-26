---
sidebar_position: 5
---

# Middlewares

El hook **useCleanFetching** admite una serie de middlewares que se ejecutan junto con los cambios de estado y que se pueden ocupar a manera de callback para detectar esos cambios de manera no declarativa.

Todos estos son opcionales y se pueden ocupar de acuerdo a sus necesidades.

```tsx title="RequestComponent.tsx"
import { useCleanFetching } from "@rodlopez/clean-code";

interface TypeOfResult {
  name: string;
  email: string;
}

const RequestComponent = () => {
  const state = useCleanFetching<TypeOfResult>({
    // highlight-next-line
    middlewares: {
      init: () => {
        console.log("Ejecución al iniciar la request")
      },
      success: (user: TypeOfResult) => {
        console.log("Usuario obtenido", user)
      },
      error: (errorObject: string) => {
        console.log(`Error en la request: ${errorObject}`)
      },
      reset: () => {
        console.log("Se reseteó el objeto a su estado inicial")
      },
    }
  });
  .
  .
  .
  return <div>{state.data?.name}</div>;
};
```

Estos middlewareas tambien admiten arreglos

```tsx title="RequestComponent.tsx"
import { useCleanFetching } from "@rodlopez/clean-code";

interface TypeOfResult {
  name: string;
  email: string;
}

const RequestComponent = () => {
  const state = useCleanFetching<TypeOfResult>({
    middlewares: {
      // highlight-next-line
      success: [
        (user: TypeOfResult) => {
          console.log("Usuario obtenido, primer middleware", user)
        },
        (user: TypeOfResult) => {
          console.log("Usuario obtenido, segundo middleware", user)
        },
        (user: TypeOfResult) => {
          console.log("Usuario obtenido, tercer middleware", user)
        }
        .
        .
        .
      ],
    }
  });
  .
  .
  .
  return <div>{state.data?.name}</div>;
};
```
