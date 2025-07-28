import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import Store from "./store/Store.ts"
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Login,Signiup,Home } from './pages/index.ts'



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
