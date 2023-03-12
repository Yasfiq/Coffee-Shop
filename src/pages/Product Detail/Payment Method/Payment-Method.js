import InputRadio from "../Input Radio/Input-Radio"

const PaymentMethod  = () => {
    return <>
        <div className="py-5">
            <InputRadio name="delivery" value="dine-in" label="Dine in" />
            <InputRadio name="delivery" value="home-delivery" label="Home delivery" />
            <InputRadio name="delivery" value="take-away" label="Take away" />    
        </div>                
    </>
}


export default PaymentMethod