// Imports
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import { useState, useEffect } from "react";


const Home = () => {
    let [isLogin, setIsLogin] = useState(false)
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