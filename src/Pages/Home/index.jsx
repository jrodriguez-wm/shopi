import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail';
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";


function Home() {
  const context = useContext(ShoppingCartContext)

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
          {
            context.items?.map(item=>(
              //  <p> {JSON.stringify(item)} </p> 
              <Card key={item.id} data={item}/>
            ))
          }
        </div>
        <ProductDetail/>
    </Layout>    
  )
}

export default Home
