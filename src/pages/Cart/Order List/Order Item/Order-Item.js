const OrderItem = (props) => {
    return <>
        <div className="flex justify-between p-5 font-rubik text-black items-center">
            <div className="flex items-center">
                <div className={`w-24 h-24 rounded-2xl mr-8 bg-cover bg-center bg-no-repeat`} style={{backgroundImage: `url(${props.image})`}}></div>
                <div className="text-base">
                    <p>{props.productname}</p>
                    <p>x {props.quantity}</p>
                    <p>{props.size}</p>
                </div>
            </div>
            <p className="">IDR {props.total_price}</p>
        </div>
    </>
}


export default OrderItem