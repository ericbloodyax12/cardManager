import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <div>hello</div>,
    path: '/',
  },
  {
    element: <div>login</div>,
    path: '/login',
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
