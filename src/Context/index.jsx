import { createContext,useState } from "react";

export const ShoppingCartContext = createContext();

export const  ShoppingCartProvider = ({children}) =>{

    const [count,setCount] = useState(0);  
    // console.log('Count',count);
    const [isProductDetailOpen,setIsProductDetailOpen] = useState(false);  

    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

