import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <>
            {/* <div className="h-screen w-full absolute -z-10 overflow-hidden">
                <img src={require('../../assets/images/notfound.webp')} alt="background" className='block w-full' />
            </div> */}
            <div className="h-screen w-full bg-[url(../images/notfound.webp)] bg-cover bg-center bg-no-repeat">
                {/* <img src={require('../../assets/images/notfound.webp')} alt="" className='' /> */}
                <div className="container text-white flex flex-col justify-center items-center mx-auto">
                    <h1 className='text-[16rem] text-center font-rubik tracking-widest font-bold'>404</h1>
                    <h3 className="text-6xl text-center font-rubik tracking-widest font-bold">SORRY, PAGE NOT FOUND!</h3>
                    <Link to='/' ><button className="mt-10 btn-primary text-2xl">Go home</button></Link>
                </div>
            </div>
        </>
    )
}


export default NotFound