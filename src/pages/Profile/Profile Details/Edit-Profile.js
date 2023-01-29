import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../../actions/userAction";
import editIcon from "../../../assets/images/icon/edit-icon.svg";


const DetailsHeader = (props) => {
    const dispatchEdit = useDispatch()
    return (
        <div className={`flex justify-between items-center ${props.className}`}>
            <h3 className="text-2xl font-poppins font-bold">{props.content}</h3>
            {props.icon && (
                <div className="w-14 h-14 flex justify-center items-center bg-secondary text-white p-3 rounded-full" onClick={(e) => dispatchEdit({type: 'EDIT_STATE', status: true})}>
                    <img src={props.icon_src} alt={props.icon} width="25" />
                </div>
            )}
        </div>             
    )
}


const EditInput = (props) => {
    return (
        <div>
            <label htmlFor={props.name} className="font-poppins font-bold text-xl text-gray-500">{props.label}</label>
            <input type="text" name={props.name} id={props.name} className="input-oneline text-base mt-0" defaultValue={props.default}/>
        </div>
    )
}


const ProfileDetails = () => {
    const dispatch = useDispatch()
    const { getUserResult, getUserError, getUserLoading } = useSelector(state => state.userReducer)
    // const [edit,setEdit] = useState(false);


    useEffect(() => {
        dispatch(getUserById(JSON.parse(localStorage.getItem('@userLogin')).id))
    },[dispatch])


    if (getUserResult) {
        return (
            <>
                <div className="col-span-8 font-rubik">
                    <DetailsHeader content='Contacts' icon='edit-icon' icon_src={editIcon} />
                    <div className="grid grid-cols-2 gap-x-32 gap-y-10 pr-14 mt-5 w-full">
                        <EditInput name="email" label="Email Address :" default={getUserResult[0].email} />
                        <EditInput name="mobile-number" label="Mobile number :" default={getUserResult[0].mobile_number !== 'null' ? getUserResult[0].mobile_number : ''} />
                        <EditInput name="address" label="Delivery Address :" default={getUserResult[0].address !== 'null' ? getUserResult[0].address : ''} />
                    </div>
                    <DetailsHeader content="Details" className='mt-10' />
                    <div className="grid grid-cols-2 gap-x-32 gap-y-10 pr-14 mt-5 w-full">
                        <EditInput name="name" label="Display name :" default={getUserResult[0].name} />
                        <div className="flex flex-col">
                            <label htmlFor="date" className="mb-6 font-poppins font-bold text-xl text-gray-500">DD/MM/YY</label>
                            <input type="date" name="date" id="date" className="text-xl uppercase"/>
                        </div>
                        <EditInput name="firstname" label="First name :" default={getUserResult[0].firstname !== 'null' ? getUserResult[0].firstname : ''} />
                        <div className="flex items-center">
                            <input type="radio" name="gender" id="male" value="male" className="accent-primary w-5 h-5" />
                            <label htmlFor="male" className="text-xl font-bold font-poppins text-secondary ml-2" style={{background:'none',color: '#6A4029',padding: '0'}} >Male</label>
                            <input type="radio" name="gender" id="female" value="female" className="accent-primary w-5 h-5 ml-10" />
                            <label htmlFor="female" className="text-xl font-bold font-poppins text-secondary ml-2" style={{background:'none',color: '#6A4029',padding: '0'}} >Female</label>
                        </div>
                        <EditInput name="lastname" label="Last name :" default={getUserResult[0].lastname !== 'null' ? getUserResult[0].lastname : ''} />
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="col-span-8 border-2 font-rubik">
                    <DetailsHeader icon='edit-icon' icon_src={editIcon} />
                    <label htmlFor="email" className="font-poppins font-bold text-xl text-gray-500">Email Address :</label>
                    <input type="text" name="email" id="email" className="input-oneline text-base mt-0" defaultValue=''/>
                </div>
            </>
        )
    }
}


export default ProfileDetails