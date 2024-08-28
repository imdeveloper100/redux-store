
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Product from "./components/Product";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import RootLayout from "./components/RootLayout";
const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />}/>
      <Route path="/cart" element={<Cart/>}/>
    </Route>
  ))
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
