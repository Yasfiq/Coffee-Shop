import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ProfileContainer from "./Profile Container/Profile-Container";

const Profile = () => {
    const navigate = useNavigate()
    let [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        if (!localStorage.getItem('@userLogin')) {
            navigate('/login')
        }
        if (localStorage.getItem('@userLogin')) {
            setIsLogin(true)
        } else {
            setIsLogin(false)
        }
    },[isLogin, navigate])

    return (
        <>
            <Header isLogin={setIsLogin} authorized={isLogin}/>
            <div className="w-full bg-[url(../images/profile-bg.webp)] bg-cover bg-no-repeat bg-top">
                <div className="container py-8">
                    <h1 className="font-rubik font-medium text-5xl text-white mb-6">User Profile</h1>
                    <ProfileContainer />
                </div>
            </div>
            <Footer />
        </>
    )
}


export default Profile