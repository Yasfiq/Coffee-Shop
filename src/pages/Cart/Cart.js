import OrderList from "./Order List/Order-List"
import PaymentDetails from "./Payment Details/Payment-Details"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import AddressDetails from "./Address Details/Address-Details"
import PaymentMethods from "./Payment Methods/Payment-Methods"
import { getOrder } from "../../actions/orderAction"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"


const Cart = () => {
    const navigate = useNavigate()
    let [isLogin, setIsLogin] = useState(false);
    const dispatch = useDispatch();


    useEffect(() => {
        if (!localStorage.getItem('@userLogin')) {
            navigate('/login')
        }
        if (localStorage.getItem('@userLogin')) {
            setIsLogin(true)
        } else {
            setIsLogin(false)
        }
    }, [isLogin, navigate])


    useEffect(() => {
        if (localStorage.getItem('@userLogin')) {
            dispatch(getOrder(JSON.parse(localStorage.getItem('@userLogin')).id));
        }
    }, [dispatch])


    return (
        <>
            <Header cart isLogin={setIsLogin} authorized={isLogin} />
            <div className="p-10 font-rubik text-base bg-[url(../images/cart-bg.webp)] bg-center bg-cover bg-no-repeat">
                <div className="container grid grid-cols-12 gap-x-36">
                    <h1 className="col-span-12 text-4xl text-white font-bold" style={{ textShadow: '4px 4px 0px rgba(0,0,0,.8)' }}>Checkout your item now!</h1>
                    <div className="col-span-5 px-8 py-14 bg-white rounded-2xl mt-10">
                        <h1 className="text-3xl font-bold text-center">Order Summary</h1>
                        <OrderList />
                        <hr className="border-t-2" />
                        <PaymentDetails />
                    </div>
                    <div className="col-span-5">
                        <AddressDetails />
                        <PaymentMethods />
                        <Link to="/history"><button className="btn-secondary w-full mt-5 text-2xl">Confirm and Pay</button></Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default Cart