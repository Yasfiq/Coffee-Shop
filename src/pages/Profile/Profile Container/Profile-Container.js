import ProfileDetails from "../Profile Details/Profile-Details"
import ProfileSettings from "../Profile Settings/Profile-Settings"

const ProfileContainer = () => {
    return (
        <>
            <form className="bg-white w-full p-8 pb-16 rounded-xl grid grid-cols-12">
                <ProfileSettings />
                <ProfileDetails />
            </form>
        </>
    )
}


export default ProfileContainer