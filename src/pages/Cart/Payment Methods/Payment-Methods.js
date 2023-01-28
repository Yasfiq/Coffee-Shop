import cardIcon from "../../../assets/images/icon/card.svg"
import bankIcon from "../../../assets/images/icon/bank.svg"
import codIcon from "../../../assets/images/icon/cod.svg"
import Method from "./Method/Method"


const PaymentMethods = () => {
    return <>
        <div className="bg-white p-8 rounded-2xl mt-10 font-poppins">
            <h3 className="text-3xl font-bold text-center">Payment Method</h3>
            <Method value="card" label="Card" icon={cardIcon} bgIcon="bg-[#F47B0A]" />
            <Method value="bank-account" label="Bank Account" icon={bankIcon} bgIcon="bg-secondary" />
            <Method value="cod" label="Cash on delivery" icon={codIcon} bgIcon="bg-primary" />
        </div>
    </>
}


export default PaymentMethods