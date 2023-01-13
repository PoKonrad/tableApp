import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./views/Index";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
