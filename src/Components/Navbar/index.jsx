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
                    <NavLink to='/' 
                        onClick={ ()=> context.setSearchByCategory('') }
                        className={({isActive})=> isActive ? activeStyle: undefined }>All</NavLink>
                </li>
                <li>
                    <NavLink to='/clothing' 
                        onClick={ ()=> context.setSearchByCategory('clothing') }
                        className={({isActive})=> isActive ? activeStyle: undefined }>Clothing</NavLink>
                </li>
                <li>
                    <NavLink to='/jewelery' 
                        onClick={ ()=> context.setSearchByCategory('jewelery') }
                        className={({isActive})=> isActive ? activeStyle: undefined }>Jewelery</NavLink>
                </li>
                <li>
                    <NavLink to='/electronics' 
                        onClick={ ()=> context.setSearchByCategory('electronics') }
                        className={({isActive})=> isActive ? activeStyle: undefined }>Electronics</NavLink>
                </li>
                <li>
                    <NavLink to='/women' 
                        onClick={ ()=> context.setSearchByCategory('women') }
                        className={({isActive})=> isActive ? activeStyle: undefined }>Women</NavLink>
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
                    <div>{context.cartProducts.length}</div>
                </li>
                
            </ul>
        </nav>
    )
}

export default Navbar;