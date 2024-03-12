import { useContext } from "react";
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from "../../Context";
import OrdersCard from '../../Components/OrdersCard'
import { Link } from "react-router-dom";


function MyOrders() {
    const context = useContext(ShoppingCartContext)

    return (
      <Layout>
          <div className="flex w-80 items-center relative justify-center">
            <h1>My Orders</h1>           
          </div>        
          {
            context.order.map((order,index)=>{
                <Link key={index} to={`/my-orders/${order.id}`}>
                  <OrdersCard                     
                    totalPrice={order.TotalPrice}
                    totalProducts={order.TotalPrroducts}
                    />
                </Link>
            })
          }
          
      </Layout>    
    )
  }
  
  export default MyOrders
  