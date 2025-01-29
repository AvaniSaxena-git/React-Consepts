import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './layout.jsx'
const router = createBrowserRouter([{
  path:'/',
  element: <Layout/>,
  children:[{
    path:"",
    element:<home/>
  },{
    path:"about",
    element:<about/>
  }]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
