import { createBrowserRouter, Navigate } from 'react-router-dom'

import { Layout } from './components/Layout'
import { Books } from './pages/Books'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { User } from './pages/User'
import { AuthSwitcher } from './pages/AuthSwitcher'
import { Search } from './pages/Search'
import { SingleBook } from './pages/SingleBook'
import { MyFavorites } from './pages/MyFavorites'
import { Cart } from './pages/Cart'


export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/new_books/pages/1" replace={true} />
      },
      {
        path: '/new_books/pages/:pageNumber',
        element: <Books />
      },
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
      {
        path: '/user',
        element: <User />,
        children: [
          {
            path: '/user/',
            element: <Navigate to="/user/authswitcher" replace={true} />
          },
          {
            path: '/user/authswitcher',
            element: <AuthSwitcher />,
            children: [
              {
                path: '/user/authswitcher/',
                element: <Navigate to={"/user/authswitcher/sign-in"} />
              },
              {
                path: '/user/authswitcher/sign-in',
                element: <SignIn />
              },
              {
                path: '/user/authswitcher/sign-up',
                element: <SignUp />
              }
            ]
          },
        ]
      },
      {
        path: '/search/:query',
        element: <Search />,
      },
      {
        path: '/:isbn13',
        element: <SingleBook />
      },
      {
        path: '/my-favorites',
        element: <MyFavorites />
      },
      {
        path: '/cart',
        element: <Cart />
      },
    ],
  },
]);