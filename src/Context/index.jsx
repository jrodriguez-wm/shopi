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
    const [filterItems,setFilterItems] = useState(null);  

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setItems(data))
    },[])

    // Buscar por titulo
    const [searchByTitle,setSearchByTitle] = useState(null);  
    // console.log('search:', searchByTitle);

    const filterItemsByTitle = (items, searchByTitle)=>{
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    // Buscar por categoria
    const [searchByCategory,setSearchByCategory] = useState(null);  
    // console.log('search:', searchByTitle);

    const filterItemsByCategory= (items, searchByCategory)=>{
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy= (searchType,items,searchByTitle,searchByCategory)=>{
        // console.log(searchType,searchByTitle,searchByCategory)

        if(searchType==='title')
            return filterItemsByTitle(items,searchByTitle)
        
        if(searchType==='category')
            return filterItemsByCategory(items,searchByCategory)
        
        if(searchType==='both')
            return filterItemsByCategory(items,searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))

        if(!searchType)
            return items
        
        
    }

    useEffect(()=>{
         if(searchByTitle && searchByCategory) setFilterItems(filterBy('both',items,searchByTitle,searchByCategory))
         if(searchByTitle && !searchByCategory) setFilterItems(filterBy('title',items,searchByTitle,searchByCategory))
         if(!searchByTitle && searchByCategory) setFilterItems(filterBy('category',items,searchByTitle,searchByCategory))
         if(!searchByTitle && !searchByCategory) setFilterItems(filterBy(null,items,searchByTitle,searchByCategory))

    },[items,searchByTitle,searchByCategory])

    // console.log("filter:",filterItems);

    


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
            setSearchByTitle,
            filterItems,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

