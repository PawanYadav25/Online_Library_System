import Header from "./Utils/Header"
import { Outlet } from "react-router-dom"
import { Provider } from 'react-redux'
import appStore from "./Utils/appStore"
import Footer from "./Utils/Footer"

function App() {

  return (
    <>
    {/* <Provider store={appStore} > */}
    <Header/>
    <Outlet/>
    <Footer/>
    {/* </Provider> */}
    </>
  )
}

export default App
