import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import Store from "./store/Store"
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Login,Signiup,Home,Cart } from './pages'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children:[
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signiup />
      },
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={Store}>   
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
