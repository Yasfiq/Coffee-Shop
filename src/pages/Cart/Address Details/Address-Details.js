const AddressDetails = () => {
    return <>
        <div className="bg-white p-8 rounded-2xl font-poppins">
            <h3 className="text-3xl font-bold mb-3 text-center">Address details</h3>
            <textarea name="address" id="address" cols="30"className="focus:outline-none" defaultValue='Km 5 refinery road oppsite republic road, effurun, Jakarta'></textarea>
            <hr className="border border-t-2 mb-3" />
            <p>+62 81348287878</p>
        </div>
    </>
}


export default AddressDetails