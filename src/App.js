import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/components/Home";
import Profile from "./pages/components/Profile";
import Search from "./pages/components/Search";
import Layout from "./pages/Layout"
import PostsPage from "./pages/components/PostsPage";
import Notifications from "./pages/components/Notifications";
import Messages from "./pages/components/Messages"
import Lists from "./pages/components/Lists";


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
        element: <Home />,
        children: [
          {
            path: "/Home/",
            element: <PostsPage />
          },
          {
            path: "/Home/explore",
            element: <Search />
          },
          {
            path: "/Home/notifications",
            element: <Notifications />
          },
          {
            path: "/Home/messages",
            element: <Messages />
          },
          {
            path: "/Home/lists",
            element: <Lists />
          },
          {
            path: "/Home/Profile",
            element: <Profile />
          },
        ]
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
