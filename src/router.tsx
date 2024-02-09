import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
  useParams,
} from 'react-router-dom'

const pathParams = {
  premiumUserID: 'premiumUserID',
}

function PremiumContent() {
  const params = useParams()

  return <div>{params[pathParams.premiumUserID]}</div>
}

const publicRoutes: RouteObject[] = [
  {
    element: <div>login</div>,
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
        The contet for Premium users
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

  console.log('PrivateRoutes')

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} /> // Outlet спец react routers component, который рендрит чилдренов которые есть в текущем роуте
}
function PremiumRoutes() {
  const isPremium = true
  const isAuthenticated = true

  console.log('PremiumRoutes')
  if (!isAuthenticated) {
    return <Navigate to={'login'} />
  }

  return isPremium ? (
    <Outlet />
  ) : (
    <div>Pay 50$ for PREMIUM and start to enjoy for premium content</div>
  )
}
