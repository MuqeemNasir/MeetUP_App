import React from "react"
import ReactDOM from "react-dom/client"
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

// import './index.css'
import App from './App.jsx'
import EventDetails from "./pages/EventDetails.jsx"

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/events/:id", element: <EventDetails />}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
