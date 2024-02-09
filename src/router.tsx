import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

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

const router = createBrowserRouter([
  ...publicRoutes,
  {
    children: privateRoutes, // если текущий путь в браузере совпадает с любым из чилдронов этого элемента, тогда отрендрится <PrivateRoutes /> компонент и сам чилдрн будет находиться в <Outlet />
    element: <PrivateRoutes />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
function PrivateRoutes() {
  const isAuthenticated = true // этот флаг мы берем из хука из rtk query

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} /> // Outlet спец react routers component, который рендрит чилдренов которые есть в текущем роуте
}
