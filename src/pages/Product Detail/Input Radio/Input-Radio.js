const InputRadio = ({name, value, label}) => {
    return <>
        <input type="radio" id={value} className="hidden checkRadio" name={name} value={value}/>
        <label htmlFor={value} className="btn-third mr-2 text-base font-black">{label}</label>
    </>
}


export default InputRadio