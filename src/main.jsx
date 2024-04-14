import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';
import Root from './Component/Root/Root.jsx';
import HomePage from './Pages/HomePage/HomePage.jsx';
import Login from './Component/Login/Login.jsx';
import SignUp from './Component/SignUp/SignUp.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : "/",
        element : <HomePage></HomePage>
      },
      {
        path : "/login",
        element : <Login></Login>
      },
      {
        path : "/signUp",
        element : <SignUp></SignUp>
      },
    ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
