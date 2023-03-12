const Method = ({value, label, icon, bgIcon}) => {
    return <>
        <div className="flex mt-5">
            <input type="radio" name="payment_method" id={value} value={value} className="accent-secondary"/>
            <label htmlFor={value} className="flex ml-3 items-center">
                <div className={`flex justify-center items-center rounded-xl p-3 ${bgIcon}`}>
                    <img src={icon} alt={label} className="w-5 h-5" />
                </div>
                <p className="text-xl ml-3">{label}</p>
            </label>
        </div>
    </>
}


export default Method