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
    const [cartProducts,setCartProducts] = useState([]);  

    // Orden de compra
    const [order,setOrder] = useState([]);  

    // Mostrar/Ocultar compras
    const [isCheckoutSideMenuOpen,setIsCheckoutSideMenuOpen] = useState(false);  
    const openCheckoutSideMenuOpen = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenuOpen = () => setIsCheckoutSideMenuOpen(false);

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
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenuOpen,
            closeCheckoutSideMenuOpen,
            order,
            setOrder
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

