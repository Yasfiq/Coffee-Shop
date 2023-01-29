import NavbarBrand from "../Navbar-Brand/Navbar-Brand";
import facebookIcon from "../../assets/images/icon/facebook-circle.svg";
import twitterIcon from "../../assets/images/icon/twitter-circle.svg";
import instagramIcon from "../../assets/images/icon/instagram-circle.svg";


const Footer = () => {
    return (
        <>
            <footer className="container hidden mx-auto py-28 md:flex justify-between">
                <div className="max-w-md">
                    <NavbarBrand />
                    <p className="text-[#4F5665] mt-4 font-bold text-base font-rubik">
                        Coffee Shop is a store that sells some good meals, and especially
                        coffee. We provide high quality beans
                    </p>
                    <div className="flex mt-4 space-x-4">
                        <img className="shadow-xl rounded-full" width="50" src={facebookIcon} alt="facebook-icon" />
                        <img className="shadow-xl rounded-full" width="50" src={twitterIcon} alt="twitter-icon" />
                        <img className="shadow-xl rounded-full" width="50" src={instagramIcon} alt="instagram-icon" />
                    </div>
                    <p className="mt-8 text-[#AFB5C0] text-xl font-bold font-rubik">&copy;2023CoffeeStore</p>
                </div>
                <div className="flex space-x-32">
                    <ul className="space-y-4">
                        <li className="text-[#4F5665] text-xl font-rubik font-bold">Product</li>
                        <li className="text-[#4F5665] text-xl font-rubik">Download</li>
                        <li className="text-[#4F5665] text-xl font-rubik">Pricing</li>
                        <li className="text-[#4F5665] text-xl font-rubik">Locations</li>
                        <li className="text-[#4F5665] text-xl font-rubik">Countries</li>
                        <li className="text-[#4F5665] text-xl font-rubik">Blog</li>    
                    </ul>
                    <ul className="space-y-4">
                        <li className="text-[#4F5665] text-xl font-rubik font-bold">Engage</li>
                        <li className="text-[#4F5665] text-xl font-rubik">Coffee Shop ?</li>
                        <li className="text-[#4F5665] text-xl font-rubik">FAQ</li>
                        <li className="text-[#4F5665] text-xl font-rubik">About Us</li>
                        <li className="text-[#4F5665] text-xl font-rubik">Privacy Policy</li>
                        <li className="text-[#4F5665] text-xl font-rubik">Terms of Service</li>                            
                    </ul>           
                </div>
            </footer>
        </>
    )
}


export default Footer