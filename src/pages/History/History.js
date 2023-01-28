import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HistoryList from "./History List/History-List";

const History = () => {
    const navigate = useNavigate()
    let [isLogin, setIsLogin] = useState(false);

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


    return <>
        <Header history isLogin={setIsLogin} authorized={isLogin}/>
        <div className="py-10 w-full bg-[url(../images/history-bg.webp)] bg-cover bg-center bg-no-repeat">
            <div className="container font-rubik">
                <h1 className="text-white text-4xl font-bold text-center" style={{textShadow: '4px 4px 0px rgba(0,0,0,.8)'}}>Let see what you have bought!</h1>
                <h3 className="text-white text-2xl text-center mt-5">Select item to delete</h3>
                <HistoryList />
            </div>
        </div>
        <Footer />
    </>
}


export default History