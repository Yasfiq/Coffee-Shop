import InputRadio from "../Input Radio/Input-Radio"

const Size = () => {
    return <>
        <div className="flex pt-5">
            <InputRadio name="size" value="regular" label="R" />
                        {/*  */}
            <InputRadio name="size" value="large" label="L" />
                        {/*  */}
            <InputRadio name="size" value="xtra-large" label="XL" />
        </div>
    </>
}


export default Size