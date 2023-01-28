import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import NavbarBrand from "../../components/Navbar-Brand/Navbar-Brand"
import googleIcon from "../../assets/images/icon/google.svg"
import Footer from "../../components/Footer/Footer"
import axios from "axios"

const Login = () => {
    let [errorMessage, setError] = useState('')
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')
        const data = new FormData(e.target);
        const form = new URLSearchParams(data)
        axios.post('http://localhost:3000/api/v1/auth/login',form).then(res => {
            localStorage.setItem('@userLogin', JSON.stringify(res.data.data))
            navigate('/product')
        }).catch(err => {
            setError(err.response.data.Message);
        })
    }

    useEffect(() => {
        if (localStorage.getItem('@userLogin')) {
            navigate('/product')
        }
    },[navigate])

    return (
        <>
            <div className="grid grid-cols-12">
                <section className="col-span-6 h-screen bg-[url(../images/auth-bg.webp)] bg-no-repeat bg-cover bg-center"></section>
                <section className="p-10 col-span-6 h-screen overflow-y-scroll font-rubik">
                    <div className="flex justify-between mb-40">
                        <NavbarBrand />
                        <h3 className="font-bold text-4xl text-secondary">Login</h3>
                    </div>
                    <form className="mx-auto mb-5 w-3/4" onSubmit={handleSubmit}>
                        <label htmlFor="username" className="text-xl block font-medium">Username :</label>
                        <input type="text" name="username" id="username" placeholder="Enter your username" className="placeholder:text-base w-full text-xl mt-3 rounded-2xl py-4 px-5 border-2 border-blold/30" />
                        <label htmlFor="password" className="mt-6 text-xl block font-medium">Password :</label>
                        <input type="password" name="password" id="password" placeholder="Enter your password" className="placeholder:text-base w-full text-xl mt-3 rounded-2xl py-4 px-5 border-2 border-blold/30" />
                        <p className="text-xl mt-4 text-red-500 font-rubik font-medium">{errorMessage}</p>
                        <Link ><p className="text-xl text-secondary font-medium underline mt-5">Forgot Password ?</p></Link>
                        <button type="submit" className="btn-primary text-2xl mt-10 w-full">Login</button>
                        <button className="btn-third text-2xl w-full mt-5"><img src={googleIcon} alt="google-icon" className="mr-3 inline"/>Login with Google</button>
                        <p className="text-base my-4 relative bg-white z-[2] w-max px-2 mx-auto text-blold/50">Don't have an account</p>
                        <hr className="border-t-2 -translate-y-8 -z-[1]" />
                        <Link to="/register"><button className="btn-secondary w-full text-2xl">Register</button></Link>
                    </form>
                    <Footer />
                </section>
            </div>
        </>
    )
}


export default Login