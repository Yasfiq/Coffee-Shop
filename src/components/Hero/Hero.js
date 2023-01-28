import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <>
            <div className="pt-12 pb-36 bg-[url(../../assets/images/hero-bg.webp)] bg-cover bg-no-repeat bg-center">
                <div className="container mx-auto grid grid-cols-1">
                    <input type="text" name="search" className="w-1/4 text-xl inline-block justify-self-end rounded-5 py-4 px-5 rounded-full" id="search-btn" placeholder="&#128269; Search"/>
                    <h1 class="font-bold text-white my-5 font-rubik w-2/5 leading-snug text-5xl">
                        Start Your Day with Coffee and Good Meals
                    </h1>
                    <p class="font-bold text-xl w-2/5 mb-5 text-white">
                        We provide high quality beans, good taste, and healthy meals made
                        by love just for you. Start your day with us for a bigger smile!
                    </p>
                    <Link to="/login" >
                        <button className="btn-primary mt-10 text-xl w-1/5 hover:shadow-xl hover:shadow-primary/30">Get Started</button>
                    </Link>
                </div>
            </div>
        </>
    )
}


export default Hero