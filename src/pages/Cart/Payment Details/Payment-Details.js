const PaymentDetails = () => {
    return <>
        <div className="mt-10">
            <div className="flex justify-between font-poppins text-base uppercase">
                <p>subtotal</p>
                <p>IDR 120.000</p>
            </div>
            <div className="flex justify-between font-poppins text-base uppercase">
                <p>tax & fees</p>
                <p>IDR 20.000</p>
            </div>
            <div className="flex justify-between font-poppins text-2xl font-bold mt-10 uppercase">
                <p>total</p>
                <p>IDR 20.000</p>
            </div>
        </div>
    </>
}


export default PaymentDetails