import { useSelector } from "react-redux"
import OrderItem from "./Order Item/Order-Item"

const OrderList = () => {
    const {getOrderResult, getOrderLoading, getOrderError} = useSelector(state => state.orderReducer)


    return <>
        {getOrderResult ? (
            getOrderResult.Data.map(order => {
                return <>
                    <OrderItem image={`http://localhost:3000/uploads/${order.product_image}`} productname={order.productname} quantity={order.quantity} size={order.size} total_price={order.total_price}/>
                </>
            })
        ) : getOrderLoading}
    </>
}


export default OrderList