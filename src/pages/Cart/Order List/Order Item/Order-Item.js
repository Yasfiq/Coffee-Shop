const OrderItem = (props) => {
    return <>
        <div className="flex justify-between p-5 font-rubik text-black items-center">
            <div className="flex items-center">
                <div className={`w-24 h-24 rounded-2xl mr-8 ${props.image}`}></div>
                <div className="text-base">
                    <p>{props.productname}</p>
                    <p>{props.quantity}</p>
                    <p>x {props.size}</p>
                </div>
            </div>
            <p className="">IDR {props.total_price}</p>
        </div>
    </>
}


export default OrderItem