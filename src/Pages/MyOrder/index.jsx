import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from '../../Components/Layout'
import OrderCard from "../../Components/OrderCard";

function MyOrder() {
    const context = useContext(ShoppingCartContext)

    console.log('Order:',context.order.slice(-1)[0]);
                
    return (
      <Layout>
          MyOrder
          <div className="flex flex-col w-80">
              {
                context.order?.slice(-1)[0].products.map(product => (
                  <OrderCard 
                      key={product.id}
                      title={product.title}
                      imageUrl={product.image}
                      price={product.price}                      
                      id={product.id}
                  />
                ))
              }
          </div>
      </Layout>    
    )
  }
  
  export default MyOrder
  