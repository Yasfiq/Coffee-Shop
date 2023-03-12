import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const PaymentDetails = () => {
    const { getOrderResult, getOrderLoading } = useSelector(state => state.orderReducer)
    let [subTotal, setSubTotal] = useState(0)

    useEffect(() => {
        let total = 0
        if (getOrderResult) {
            getOrderResult.Data.map(order => {
                total += order.total_price
                return ''
            })
        }
        setSubTotal(total)
    },[getOrderResult])

    return <>
        <div className="mt-10">
            <div className="flex justify-between font-poppins text-base uppercase">
                <p>subtotal</p>
                <p>IDR {subTotal}</p>
            </div>
            <div className="flex justify-between font-poppins text-base uppercase">
                <p>tax & fees</p>
                <p>IDR {subTotal * 10 / 100}</p>
            </div>
            <div className="flex justify-between font-poppins text-2xl font-bold mt-10 uppercase">
                <p>total</p>
                <p>IDR {subTotal + (subTotal * 10 / 100)}</p>
            </div>
        </div>
    </>
}


export default PaymentDetails