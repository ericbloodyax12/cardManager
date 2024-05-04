import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
  useParams,
} from 'react-router-dom'

import { Decks } from '@/pages/decks'

import {SignIn} from "@/pages/publicPages/signIn/signIn";
import {SignUp} from "@/pages/publicPages/signUp/signUp";
import {ForgotPassword} from "@/pages/publicPages/forgotPassword/forgotPassword";
import {useEffect, useState} from "react";
import {authStore} from "@/store/authStore/authStore";
import {CheckEmail} from "@/pages/publicPages/checkEmail/checkEmailPage";
import {TestComponentsPage} from "@/pages/testPages/testComponentsPage";






const pathParams = {
  premiumUserID: 'premiumUserID',
}

function PremiumContent() {
  const params = useParams()

  return <div>{params[pathParams.premiumUserID]}</div>
}

const publicRoutes: RouteObject[] = [
  {
    element: <SignIn />,
    path: '/login',
  },
  {
    element: <SignUp/>,
    path: '/sign_up',
  },
  {
    element: <ForgotPassword/>,
    path: '/recovery_page',
  },
  {
    element: <CheckEmail/>,
    path: '/check_email',
  },
  {
    element: <TestComponentsPage/>,
    path: '/test_page'
  }

]
const privateRoutes: RouteObject[] = [
  {
    element: <Decks />,
    path: '/',
  },
  {
    element: <div>error 404</div>,
    path: '/*'
  },

]
const premiumRoutes: RouteObject[] = [
  {
    element: (
      <div>
        The content for Premium users
        <PremiumContent />
      </div>
    ),
    path: `/premium/:${pathParams.premiumUserID}`,
  },
]

const router = createBrowserRouter([
  ...publicRoutes,
  {
    children: privateRoutes, // если текущий путь в браузере совпадает с любым из чилдронов этого элемента, тогда отрендрится <PrivateRoutes /> компонент и сам чилдрн будет находиться в <Outlet />
    element: <PrivateRoutes />,
  },
  {
    children: premiumRoutes,
    element: <PremiumRoutes />,
  }
])

export const Router = () => {
  return <RouterProvider router={router} />
}
function PrivateRoutes() {
  const [isAuth, setIsAuth] = useState<boolean>(false)

  useEffect(() => {
    authStore.setAuthState(setIsAuth)
    console.log('isAuth',isAuth)
  }, []);

  const isAuthenticated = isAuth// этот флаг мы берем из хука из rtk query

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} /> // Outlet спец react routers component, который рендрит чилдренов которые есть в текущем роуте
}
function PremiumRoutes() {
  console.log('PremiumRoutes')
  const isPremium = false
  const isAuthenticated = true

  if (!isAuthenticated) {
    return <Navigate to={'login'} />
  }

  return isPremium ? (
    <Outlet />
  ) : (
    <div>Pay 50$ for PREMIUM and start to enjoy for premium content</div>
  )
}
