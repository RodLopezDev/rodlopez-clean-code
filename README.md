# Getting Started

## Usage

```tsx title="RequestComponent.tsx"
import { useRequest, AsyncRequestRender } from "@rodlopez/clean-code";

const Component = () => {
  const repository = new Repository();
  const request = useRequest<User>({
    method: repository.getUser(),
  });
  return (
    <AsyncRequestRender<User>
      state={state}
      RenderLoading={<div />}
      Render={(user) => <MyUserUIMock user={user} />}
      RenderError={(errorObject) => <MyErrorUIMock error={errorObject} />}
    />
  );
};

export default Component;
```

## Documentation

See [https://rodlopezdev.github.io/rodlopez-clean-code](https://rodlopezdev.github.io/rodlopez-clean-code/)
