---
sidebar_position: 4
---

# traceAsync

Abstrae el seguimiento de la request y recibe como segundo parametro la promesa que retorna el objeto resultando de la request.

```tsx title="RequestComponent.tsx"
import {
  useRequest,
  AsyncRequestRender,
} from "@rodlopez/clean-code";

interface TypeOfResult {
  name: string;
  email: string;
}

const RequestComponent = () => {
  const request = useRequest<TypeOfResult, any>();

  const mockPromise = async (): Promise<TypeOfResult> => {...};

  useEffect(() => {
    // to do something
    // highlight-next-line
    request.traceAsync(mockPromise());
    // to do something
  }, []);

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

:::caution Importante

El segundo genérico recibido por el hook **traceAsync** representa el tipado del objeto de error que se recibe, al usar traceAsync lo recomendable es ocupar `any` o de preferencia `unknown`

:::
