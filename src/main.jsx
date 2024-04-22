import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Raiting from './pages/Raiting.jsx'
import SendProject from './pages/SendProject.jsx'
import Transfer from './pages/Transfer.jsx'
import Duties from './pages/Duties.jsx'
import Acceleration from './pages/Acceleration.jsx'
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
  },
  {
    path: 'raiting',
    element: <Raiting/>
  },
  {
    path: 'send-project',
    element: <SendProject/>
  },
  {
    path: 'transfer',
    element: <Transfer/>
  },
  {
    path: 'acceleration',
    element: <Acceleration/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
