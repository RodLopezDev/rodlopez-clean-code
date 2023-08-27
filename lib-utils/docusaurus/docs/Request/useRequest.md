---
sidebar_position: 1
---

# useRequest

Este hook genera un objeto con métodos para seguimiento de una petición a servidor.

```tsx title="RequestComponent.tsx"
import { useRequest, AsyncRequestRender } from "@rodlopez/clean-code";
import { IUser, Repository } from "./User";

const MyRequestComponent = () => {
  const repository = new Repository();
  // highlight-next-line
  const request = useRequest<TypeOfResult>({
    method: repository.getUser(),
  });
  return (
    <AsyncRequestRender
      request={request}
      RenderLoading={<MyLoadingUIMock />}
      Render={(user) => <MyUserUIMock />}
      RenderError={(errorObject) => <MyErrorUIMock error={errorObject} />}
    />
  );
};

export default MyRequestComponent;
```

Donde el archivo User.ts importando a manera de mock sería el siguiente.

```tsx title="User.ts"
export interface IUser {
  name: string;
  email: string;
}

export class Repository {
  async getUser(): Promise<IUser> {
    // to do something
    return { ...mock };
  }
}
```
