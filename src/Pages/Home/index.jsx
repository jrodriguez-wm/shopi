import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail';
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";


function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () =>{
    if(context.searchByTitle?.length>0 || context.searchByCategory?.length>0)
      if(context.filterItems?.length>0)
        return (
          context.filterItems?.map(item=>(
            //  <p> {JSON.stringify(item)} </p> 
            <Card key={item.id} data={item}/>
          ))
        )
      else
        return(
          <div>
            No se encontraron resultados
          </div>
        )
    else
      return (
        context.items?.map(item=>(
          //  <p> {JSON.stringify(item)} </p> 
          <Card key={item.id} data={item}/>
        ))
    )
  }

  return (
    <Layout>

        <div className="flex w-80 items-center relative justify-center">
          <h1 className="font-medium text-2xl mb-4">Exclucive Products</h1>           
        </div>        
        <input className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none' 
          type="text" id="buscador" 
          placeholder='Busca tu producto...' 
          onChange={(event) => context.setSearchByTitle( event.target.value)}/>            
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          {renderView()}
        </div>
        <ProductDetail/>
    </Layout>    
  )
}

export default Home
