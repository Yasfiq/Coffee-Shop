import { useDispatch, useSelector } from "react-redux"
import HistoryItem from "./History Item/History-Item"
import { useEffect } from "react"
import { getOrder } from "../../../actions/orderAction"

const HistoryList = () => {
    const { getOrderResult, getOrderLoading } = useSelector(state => state.orderReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOrder(JSON.parse(localStorage.getItem('@userLogin')).id));
    },[dispatch])
    
    return <>
        {getOrderResult ? (
            getOrderResult.Data.map(order => {
                return <>
                    <HistoryItem image={`http://localhost:3000/uploads/${order.product_image}`} productname={order.productname} quantity={order.quantity} totalPrice={order.total_price} status="Delivered" />
                </>
            })
        ) : getOrderLoading}
    </>
}


export default HistoryList