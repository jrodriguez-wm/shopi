import { useContext } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils";
import './style.css';


const CheckoutSideMenu = () =>{
    const context = useContext(ShoppingCartContext)
    // console.log('Detalle:', context.productToShow);

    const handleDelete = (id) =>{
        const filterProducts = context.cartProducts.filter(product =>product.id !=id);
        context.setCartProducts(filterProducts);
        context.setCount(filterProducts.length)
    }

    const handleCheckout= ()=>{
        const orderToAdd ={
            totalProducts:  context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts),
            date: new Date().toLocaleString(),
            products: context.cartProducts
        }

        context.setOrder([...context.order, orderToAdd]);

        context.setCartProducts([]);
    }

    return (
        <aside className={`${context.isCheckoutSideMenuOpen?'flex':'hidden'}  checkout-side-menu  flex-col fixed right-0 border border-black rounded bg-white `}>
            <div className='flex justify-between items-center p-4'>
                <h2 className='font-medium text-xl'>My Order</h2>
               <div>
                    <XMarkIcon className="h-6 w-6 text-black-500 cursor-pointer" 
                        onClick={()=>context.closeCheckoutSideMenuOpen()}/>
                </div>
            </div>
            <div className="px-4 overflow-y-scroll flex-1">
                {
                context.cartProducts.map(product => (
                    <OrderCard 
                        key={product.id}
                        title={product.title}
                        imageUrl={product.image}
                        price={product.price}
                        handleDelete = {handleDelete}
                        id={product.id}
                        />
                        ))
                }
            </div>
            <div className="px-4 ">
                <p className="flex justify-between items-center mb-2">
                    <span className="font-light text-lg">Total:</span>
                    <span className="font-medium text-xl">${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to="/my-orders/last">
                    <button className=" bg-black py-3 text-white w-full rounded-lg mb-4" onClick={ ()=>handleCheckout() }>Checkout  </button>
                </Link>
            </div>
            
        </aside>
    )

}


export default CheckoutSideMenu;
