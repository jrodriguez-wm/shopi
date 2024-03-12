import { createContext,useState,useEffect } from "react";

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

    // Get products
    const [items,setItems] = useState(null);  
    
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setItems(data))
    },[])

    // Buscar por titulo
    const [searchByTitle,setSearchByTitle] = useState(null);  
    console.log('search:', searchByTitle);

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
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

