import { createBrowserRouter, Navigate } from "react-router-dom"

import { Layout } from "./components/Layout"
import { Books } from "./pages/Books"
// import { Bookmarks } from "./pages/Bookmarks"
// import { UserPage } from "./pages/UserPage"
// import { SignIn } from "./pages/SignIn"
// import { SignUp } from "./pages/SignUp"

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Books />
      },
      // {
      //   path: '/bookmarks',
      //   element: <Bookmarks />
      // },
      // {
      //   path: '/user-page',
      //   element: <UserPage />,
      //   children: [
      //     {
      //       path: '/user-page/',
      //       element: <Navigate to="sign-in" replace={true} />
      //     },
      //     {
      //       path: '/user-page/sign-in',
      //       element: <SignIn />
      //     },
      //     {
      //       path: '/user-page/sign-up',
      //       element: <SignUp />
      //     }
      //   ]
      // }
    ]
  }
])