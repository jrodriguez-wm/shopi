import {useRoutes, BrowserRouter} from 'react-router-dom'

import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SigIn from '../SignIn';

import Navbar from '../../Components/Navbar'

import './App.css'

const AppRoutes = () =>{
  let routes = useRoutes([
    { path:'/', element: <Home /> },
    { path:'/my-orders', element: <MyOrders /> },
    { path:'/my-account', element: <MyAccount /> },
    { path:'/my-order', element: <MyOrder /> },
    { path:'/signin', element: <SigIn /> },
    { path:'/*', element: <NotFound /> },
  ]);

  return routes;
}
 
const App= ()=> {

  return (
    <BrowserRouter>
      < AppRoutes/>
      <Navbar />
    </BrowserRouter>
      
  )
}

export default App
