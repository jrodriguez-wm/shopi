import { useContext } from "react";
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";
import './styles.css';


const ProductDetail = () =>{
    const context = useContext(ShoppingCartContext)

    return (
        <aside className={`${context.isProductDetailOpen?'flex':'hidden'}  product-detail  flex-col fixed right-0 border border-black rounded bg-white `}>
            <div className='flex justify-between items-center p-4'>
                <h2 className='font-medium text-xl'>Detail</h2>
                {/* <div>x</div> */}
                <XMarkIcon className="h-6 w-6 text-black-500 cursor-pointer" 
                    onClick={()=>context.closeProductDetail()}/>
                
            </div>
        </aside>
    )

}


export default ProductDetail;
