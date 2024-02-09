import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
  useParams,
} from 'react-router-dom'

import { LoginForm } from '@/components/auth/login/login-form'

const pathParams = {
  premiumUserID: 'premiumUserID',
}

function PremiumContent() {
  const params = useParams()

  return <div>{params[pathParams.premiumUserID]}</div>
}

const publicRoutes: RouteObject[] = [
  {
    element: <LoginForm />,
    path: '/login',
  },
]
const privateRoutes: RouteObject[] = [
  {
    element: <div>hello</div>,
    path: '/',
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
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
function PrivateRoutes() {
  const isAuthenticated = true // этот флаг мы берем из хука из rtk query

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} /> // Outlet спец react routers component, который рендрит чилдренов которые есть в текущем роуте
}
function PremiumRoutes() {
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
