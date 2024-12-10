import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import MasterLayout from './components/MasterLayout/MasterLayout'
import NotFound from './components/NotFound/NotFound'
import ListCars from './components/ListCars/ListCars'
import CarDetails from './components/CarDetails/CarDetails'

function App() {
  let router = createBrowserRouter([
    {path:'/',
      element:<MasterLayout/>,
      errorElement:<NotFound/>,
      children:[
        { index: true,element:<Home/>},
        { path: "home", element: <Home /> },
        { path: "cars", element: <ListCars /> },
        { path: "cars/:id", element: <CarDetails /> },
      ]
    },

  ])
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
