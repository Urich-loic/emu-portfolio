import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { path } from 'framer-motion/client';

const router = createBrowserRouter([
  {
    element: <App />,
    path: '/',
    errorElement: <div>Page not found</div>,
    childeren: [
      {
      index:true,
      element:true
      }
    ]
  }
]);
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
