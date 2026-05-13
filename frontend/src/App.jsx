import {

  BrowserRouter,

  Routes,

  Route

} from "react-router-dom";

import Login from "./pages/Login";

import Register from "./pages/Register";

import Home from "./pages/Home";

import ProductList from "./pages/ProductList";

import ProductDetail from "./pages/ProductDetail";

import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrdersPage from "./pages/OrdersPage";

import Admin from "./pages/Admin";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* DEFAULT ROUTE */}

        <Route

          path="/"

          element={<Login />}
        />

        {/* LOGIN */}

        <Route

          path="/login"

          element={<Login />}
        />

        {/* REGISTER */}

        <Route

          path="/register"

          element={<Register />}
        />

        {/* HOME */}

        <Route

          path="/home"

          element={

            <ProtectedRoute>

              <Home />

            </ProtectedRoute>
          }
        />

        {/* PRODUCTS */}

        <Route

          path="/products"

          element={

            <ProtectedRoute>

              <ProductList />

            </ProtectedRoute>
          }
        />

        {/* PRODUCT DETAIL */}

        <Route

          path="/products/:id"

          element={

            <ProtectedRoute>

              <ProductDetail />

            </ProtectedRoute>
          }
        />

        {/* CART */}

        <Route

          path="/cart"

          element={

            <ProtectedRoute>

              <CartPage />

            </ProtectedRoute>
          }
        />
        <Route

          path="/checkout"

          element={

            <ProtectedRoute>

              <CheckoutPage />

            </ProtectedRoute>
          }
        />
        <Route

          path="/orders"

          element={

            <ProtectedRoute>

              <OrdersPage />

            </ProtectedRoute>
          }
        />

        {/* ADMIN */}

        <Route

          path="/admin"

          element={

            <ProtectedRoute>

              <Admin />

            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;