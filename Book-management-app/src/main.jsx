import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BookApi from './Utils/BookApi.jsx'
import NewBook from './Utils/NewBook.jsx'
import BookDetails from './Utils/BookDetails.jsx'
import Home from './Utils/Home.jsx'
import Error from './Utils/Error.jsx'



const rout = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    errorElement : <Error/>,
    children : [
      {
    path : "/",
    element : <Home/>
  },
      {
    path : "/Book",
    element : <BookApi/>
  },
  {
    path : "/NewBook",
    element : <NewBook/>
  },
  {
    path : "/Book/:id",
    element : <BookDetails/>
  }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={rout}/>
  </StrictMode>,
)
