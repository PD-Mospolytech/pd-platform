import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Duties from './pages/Duties.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/> 
  },
  {
    path: 'projects',
    element: <Projects/>
  },
  {
    path: 'duties',
    element: <Duties/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
