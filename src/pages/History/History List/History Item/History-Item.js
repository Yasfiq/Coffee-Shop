const HistoryItem = ({image, productname, quantity, totalPrice, status}) => {
    return <>
        <div className="flex w-80 p-5 bg-white rounded-xl mt-8">
            <div className={`w-24 h-24 rounded-2xl mr-8 bg-center bg-cover bg-no-repeat`} style={{backgroundImage: `url("${image}")`}}></div>
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