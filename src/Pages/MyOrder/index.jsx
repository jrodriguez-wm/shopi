import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from '../../Components/Layout'
import OrderCard from "../../Components/OrderCard";
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";

function MyOrder() {
    const context = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname;
    let index = currentPath.split('/').slice(-1).toString();

    if(index === 'last') index = context.order?.length-1;
    // console.log(currentPath);
    // console.log('index',index);
    // console.log('Order:',context.order.slice(-1)[0]);
                
    return (
      <Layout>
          <div className="flex w-80 items-center relative justify-center mb-6">
            <Link to={'/my-orders'} className="absolute  left-0">
              <ChevronLeftIcon className="h-6 w-6 text-black-500 cursor-pointer" />
            </Link>            
            <h1>MyOrders</h1>           
          </div>
          
          <div className="flex flex-col w-80">
              {
                context.order?.[index]?.products.map(product => (
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
  