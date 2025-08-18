import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './routes/Homepage.jsx'
import PostListPage from './routes/PostListPage.jsx'
import Write from './routes/Write.jsx'
import Login from './routes/Login.jsx'
import SinglePostPage from './routes/SinglePostPage.jsx'
import RegisterPage from './routes/RegisterPage.jsx'
import MainLayout from './layouts/MainLayout.jsx'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children : [
      {
        path: '/',
        element: <Homepage />
      },
      {
        path: '/posts',
        element: <PostListPage/>
      },
      {
        path: '/:slug',
        element: <SinglePostPage />
      },
      {
        path: '/write',
        element: <Write />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <RegisterPage />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
