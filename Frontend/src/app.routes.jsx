import { createBrowserRouter } from "react-router";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import { Protected } from "./features/auth/components/Protected";
import Home from "./features/interview/pages/Home";
export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: (
      // Jo bhi component ko hum protected karna chahte hai usko hum Protected component ke andar wrap kar denge taki wo component sirf tabhi render ho jab user authenticated ho aur agar user authenticated nahi hai to wo login page par redirect ho jayega
      <Protected>
        <Home />
      </Protected>
    ),
  },
  {
    path: "/interview:interviewId",
    element: <Protected></Protected>,
  },
]);
