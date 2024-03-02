import { createContext,useState } from "react";

export const ShoppingCartContext = createContext();

export const  ShoppingCartProvider = ({children}) =>{

    // Contador de productos
    const [count,setCount] = useState(0);  
    

    // Mostrar/Ocultar Detalle
    const [isProductDetailOpen,setIsProductDetailOpen] = useState(false);  
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // Agregar Card al detalle
    const [productToShow,setProductToShow] = useState({});  


    // Agregar al Carro de Compras 
    const [cartProducts,setcartProducts] = useState([]);  

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            cartProducts,
            setcartProducts
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

