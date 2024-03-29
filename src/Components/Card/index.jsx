import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const Card = (data)=>{
    const context = useContext(ShoppingCartContext)
    const showProduct = (productDeatil) =>{
        context.openProductDetail();
        context.closeCheckoutSideMenuOpen()
        context.setProductToShow(productDeatil);
    }

    const addProductsToCart = (event,productData)=>{
        event.stopPropagation();
        context.setCount(context.count +1)
        context.setCartProducts([...context.cartProducts, productData]);
        context.openCheckoutSideMenuOpen()
        context.closeProductDetail()
        // console.log('carrito:',context.cartProducts);
    }

    const renderIcon = (id)=>{

        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0;

        if(isInCart)
            return (
                <div className="absolute top-0 right-0 flex justify-center items-center rounded-full w-6 h-6 bg-black m-2 p-1 font-bold" >
                    <CheckIcon className="h-6 w-6 text-green-500" />
                </div>
            )
        else
            return (
                <div className="absolute top-0 right-0 flex justify-center items-center rounded-full w-6 h-6 bg-white m-2 p-1 font-bold" 
                    onClick={(event)=> addProductsToCart(event, data.data)}>
                    <PlusIcon className="h-6 w-6 text-red-500" />
                </div>
            )
    }

    return(
        
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg' 
            onClick={ ()=>showProduct(data.data)}> 
            {/* <p> {JSON.stringify(data.data)} </p> */}
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
                    {data.data.category}
                    
                </span>
                <img className='w-full h-full object-cover rounded-lg' src={data.data.image} alt={data.data.category} />
                {renderIcon(data.data.id)}
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{data.data.title}</span>
                <span className="text-lg font-bold">${data.data.price}</span>
            </p>
        </div>
    );
}

export default Card;