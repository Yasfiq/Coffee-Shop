// Imports
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
    let [isLogin, setIsLogin] = useState(false)
    const media = window.matchMedia("(max-width: 768px)")
    const navigate = useNavigate()

    const redirectResponsive = (media) => {
        if (media.matches) {
            navigate('/product')
        }
    }
    redirectResponsive(media)


    // media.addEventListener(redirectResponsive)


    useEffect(() => {
        if (localStorage.getItem('@userLogin')) {
            setIsLogin(true)
        } else {
            setIsLogin(false)
        }
    },[isLogin])


    return (
        <>
            <Header home isLogin={setIsLogin} authorized={isLogin}/>
            <Hero />
            <Footer />
        </>
    )
}

export default Home