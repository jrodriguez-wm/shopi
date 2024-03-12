import { useContext } from "react";
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from "../../Context";
import OrdersCard from '../../Components/OrdersCard'
import { Link } from "react-router-dom";


function MyOrders() {
    const context = useContext(ShoppingCartContext)

    // console.log('order:', context.order)

    return (
      <Layout>
          <div className="flex w-80 items-center relative justify-center">
            <h1 className="font-medium text-xl mb-4">My Orders</h1>           
          </div>        
          {
            context.order.map((order,index)=>(
              <Link key={index} to={`/my-orders/${index}`}>
                  <OrdersCard                     
                    totalPrice={order.totalPrice}
                    totalProducts={order.totalProducts}
                    date={order.date}
                    />
                </Link>
            ))
          }
          
      </Layout>    
    )
  }
  
  export default MyOrders
  