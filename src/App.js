import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/components/Home";
import Profile from "./pages/components/Profile";
import Layout from "./pages/Layout"


const currentUser = true


const ProtectedRoute = ({ children }) => {
  if (!currentUser) {
    return <Login />;
  }
  return children
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute>
      <Layout />
    </ProtectedRoute>,
    children: [
      {
        path: "/Home",
        element: <Home />
      },
      {
        path: "/Profile",
        element: <Profile />
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
