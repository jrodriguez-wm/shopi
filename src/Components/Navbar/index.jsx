import { useContext } from "react";
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from "../../Context";

import { NavLink } from "react-router-dom";


const Navbar = () => {

    const context = useContext(ShoppingCartContext)

    const activeStyle = 'underline underline-offset-4';
    

    return (
        <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0'>
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg ">
                    <NavLink to='/' >Shopi</NavLink>
                </li>
                <li>
                    <NavLink to='/' className={({isActive})=> isActive ? activeStyle: undefined }>All</NavLink>
                </li>
                <li>
                    <NavLink to='/clothes' className={({isActive})=> isActive ? activeStyle: undefined }>Clothes</NavLink>
                </li>
                <li>
                    <NavLink to='/electronics' className={({isActive})=> isActive ? activeStyle: undefined }>Electronics</NavLink>
                </li>
                <li>
                    <NavLink to='/furnetures' className={({isActive})=> isActive ? activeStyle: undefined }>Furnetures</NavLink>
                </li>
                <li>
                    <NavLink to='/toys' className={({isActive})=> isActive ? activeStyle: undefined }>Toys</NavLink>
                </li>
                <li>
                    <NavLink to='/others' className={({isActive})=> isActive ? activeStyle: undefined }>Others</NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    <NavLink >abc@correo</NavLink>
                </li>
                <li>
                    <NavLink to='/my-orders' className={({isActive})=> isActive ? activeStyle: undefined }>MyOrders</NavLink>
                </li>
                <li>
                    <NavLink to='/my-account' className={({isActive})=> isActive ? activeStyle: undefined }>MyAccount</NavLink>
                </li>
                <li>
                    <NavLink to='/signin' className={({isActive})=> isActive ? activeStyle: undefined }>SignIn</NavLink>
                </li>
                <li className="flex items-center ">
                    <ShoppingBagIcon className="h-6 w-6 text-black-500" /> 
                    <div>{context.count}</div>
                </li>
                
            </ul>
        </nav>
    )
}

export default Navbar;