const HistoryItem = ({image, productname, quantity, totalPrice, status}) => {
    return <>
        <div className="flex p-5 bg-white rounded-xl">
            <div className={`w-24 h-24 rounded-2xl mr-8 bg-primary ${image}`}></div>
            <div className="text-base">
                <p>{productname}</p>
                <p>x {quantity}</p>
                <p>{totalPrice}</p>
                <p>{status}</p>
            </div>
        </div>
    </>
}


export default HistoryItem