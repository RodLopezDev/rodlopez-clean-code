import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Search2 from "./pages/Search2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/search-with-debounce",
    element: <Search2 />,
  },
]);

function App() {
  return (
    <div>
      <ol>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/search">Search</a>
        </li>
        <li>
          <a href="/search-with-debounce">Search with debounce</a>
        </li>
      </ol>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
