import { useEffect } from "react"
import { useDispatch } from "react-redux"
import OrderItem from "./Order Item/Order-Item"

const OrderList = () => {
    const dispatch = useDispatch();


    useEffect(() => {

    },[])


    return <>
        <OrderItem image="bg-gray-200" productname="Nasi Tumpeng" quantity="2" size="Regular" total_price="24000"/>
    </>
}


export default OrderList