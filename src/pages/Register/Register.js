import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import NavbarBrand from "../../components/Navbar-Brand/Navbar-Brand"
import googleIcon from "../../assets/images/icon/google.svg"
import Footer from "../../components/Footer/Footer"
import axios from "axios"

const Register = () => {
    let [errorMessage, setError] = useState()
    const navigate = useNavigate()
    const register = (event) => {
        event.preventDefault();
        const data = new FormData(event.target)
        data.forEach(item => {
            if (item === undefined || item === '') {
                setError('Must be filled completely!')
                return
            }
        })
        setError('')
        if ( errorMessage !== undefined && errorMessage !== 'Must be filled completely!' ) {
            const form = new URLSearchParams(data)
            axios.post('http://localhost:3000/api/v1/auth/register', form).then(res => {
                if (res.data.Message === 'Successfully register!') {
                    navigate('/login')
                }
            }).catch(err => setError(err.response.data[0].msg))
        }
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
                    <div className="flex justify-between mb-8">
                        <NavbarBrand />
                        <h3 className="font-bold text-4xl text-secondary">Register</h3>
                    </div>
                    <form className="mx-auto mb-5 w-3/4" onSubmit={register}>
                        <label htmlFor="name" className="text-xl block font-medium">Name :</label>
                        <input type="text" name="name" id="name" placeholder="Enter your name" className="placeholder:text-base w-full text-xl mt-3 rounded-2xl py-4 px-5 border-2 border-blold/30" />
                        <label htmlFor="username" className="mt-6 text-xl block font-medium">Username :</label>
                        <input type="text" name="username" id="username" placeholder="Enter your username" className="placeholder:text-base w-full text-xl mt-3 rounded-2xl py-4 px-5 border-2 border-blold/30" />
                        <label htmlFor="password" className="mt-6 text-xl block font-medium">Password :</label>
                        <input type="password" name="password" id="password" placeholder="Enter your password" className="placeholder:text-base w-full text-xl mt-3 rounded-2xl py-4 px-5 border-2 border-blold/30" />
                        <label htmlFor="email" className="mt-6 text-xl block font-medium">Email Address :</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" className="placeholder:text-base w-full text-xl mt-3 rounded-2xl py-4 px-5 border-2 border-blold/30" />
                        <p className="text-xl mt-4 text-red-500 font-rubik font-medium">{errorMessage}</p>
                        <button type="submit" className="btn-primary text-2xl mt-10 w-full">Sign Up</button>
                        <button className="btn-third text-2xl w-full mt-5"><img src={googleIcon} alt="google-icon" className="mr-3 inline"/>Sign up with Google</button>
                        <p className="text-base my-4 relative bg-white z-[2] w-max px-2 mx-auto text-blold/50">Already have an account?</p>
                        <hr className="border-t-2 -translate-y-8 -z-[1]" />
                        <Link to="/register"><button className="btn-secondary w-full text-2xl">Login</button></Link>
                    </form>
                    <Footer />
                </section>
            </div>
        </>
    )
}


export default Register