import { useSelector } from "react-redux"

const AddressDetails = () => {
    const { getOrderResult, getOrderLoading } = useSelector(state => state.orderReducer)


    return <>
        <div className="bg-white p-8 rounded-2xl font-poppins">
            <h3 className="text-3xl font-bold mb-3 text-center">Address details</h3>
            <textarea name="address" id="address" cols="30"className="focus:outline-none" defaultValue={getOrderResult ? getOrderResult.Data[0].address : ''}></textarea>
            <hr className="border border-t-2 mb-3" />
            <p>{getOrderResult ? getOrderResult.Data[0].mobile_number : ''}</p>
        </div>
    </>
}


export default AddressDetails