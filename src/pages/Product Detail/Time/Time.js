import InputRadio from "../Input Radio/Input-Radio"

const Time = () => {
    return <>
        <div className="flex mt-4">
            <p className="text-base mr-8 self-center">Now</p>
            <InputRadio name="time" value={new Date().toISOString()} label="Yes" />
            <InputRadio name="time" value="notnow" label="No" />
        </div>
        <div className="flex mt-6">
            <label htmlFor="time" className="text-base mr-8 self-center">Set Time</label>
            <input type="text" name="customTime" id="time" placeholder="Enter time for reservation" className="bg-third/30 py-3 px-4 rounded-xl placeholder:text-blold" />
        </div>
    </>
}


export default Time