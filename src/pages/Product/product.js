// Imports
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Coupons from "../../components/Coupon-Container/Coupon-Container";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";


const Product = () => {
    // const { result } = useSelector(state => state.productReducer)
    let [isLogin, setIsLogin] = useState(false)
    const [category, setCategory] = useState('')
    const [order, setOrder] = useState('')
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('')
    const [limit, setLimit] = useState('')

    const checkRole = () => {
        if (localStorage.getItem('@userLogin')) {
            if (JSON.parse(localStorage.getItem('@userLogin')).role === "admin") {
            return <>
                <Link to='add-product'><a href="product/add-product" className="btn-primary font-medium text-xl">Add products +</a></Link>
            </>
            } else {
                return <>
                    <h1 className="md:hidden mt-6 mb-6 font-poppins font-black text-3xl">A good coffee is a good day</h1>
                </>
            }
        } else {
            return
        }
    }


    const handleClickCategory = (e, category) => {
        setCategory(category)
    }


    const handleSort = (e) => {
        setOrder(e.target.value)
    }


    const handleSearch = (e) => {
        setSearch(query)
        // if (result !== false) {
        //     for (let i = 0;i < result.TotalPage;i++) {
        //         console.log(i+1);
        //     }
        // }
    }


    const handleLimit = (e) => {
        setLimit(e.target.value)
    }

    
    useEffect(() => {
        setCategory('')
        if (localStorage.getItem('@userLogin')) {
            setIsLogin(true)
        } else {
            setIsLogin(false)
        }
    },[isLogin])

    return (
        <>
            <Header product isLogin={setIsLogin} authorized={isLogin}/>
            <section className="grid grid-cols-7 md:pt-0 pt-16 border-b mx-auto">
                <aside className="border-r md:col-span-2 hidden text-center py-8">
                    <h3 className="text-4xl font-bold mb-2 text-secondary font-rubik">Promo for you</h3>
                    <p className="font-poppins text-base mb-8">Coupons will be updated every weeks. Check them out!</p>
                    <Coupons />
                    <Link to='/'><p className="block mt-5 w-[60%] mx-auto btn-secondary text-xl font-poppins">Apply Coupon</p></Link>
                    <ol className="font-rubik font-normal text-left mt-20 pl-10">
                        <li><span className="font-rubik font-bold text-left">Terms and Condition</span></li>
                        <li>1. You can only apply 1 coupon per day</li>
                        <li>2. It only for dine in</li>
                        <li>3. Buy 1 get 1 only for new user</li>
                        <li>4. Should make member card to apply coupon</li>
                    </ol>
                </aside>
                <main className="md:col-span-5 col-span-12 md:p-10 pl-10 md:w-auto w-screen">
                    {checkRole()}
                    <div className="flex items-center justify-between md:w-auto w-screen overflow-x-scroll">
                        <ul className="md:mt-8 md:text-2xl text-xl flex space-x-8 mb-10">
                            <li className="cursor-pointer hover:text-secondary font-bold text-secondary" onClick={(e) => {handleClickCategory(e,'')}}>All</li>
                            <li className="cursor-pointer hover:text-secondary text-[#9F9F9F]" onClick={(e) => {handleClickCategory(e,'')}}>Favorite</li>
                            <li className="cursor-pointer hover:text-secondary text-[#9F9F9F]" onClick={(e) => {handleClickCategory(e,'Coffee')}}>Coffee</li>
                            <li className="cursor-pointer hover:text-secondary text-[#9F9F9F] w-max" onClick={(e) => {handleClickCategory(e,'Non-Coffee')}}>Non Coffee</li>
                            <li className="cursor-pointer hover:text-secondary text-[#9F9F9F]" onClick={(e) => {handleClickCategory(e,'Food')}}>Foods</li>
                        </ul>
                        <div className="flex mr-20">    
                            <div className="flex">
                                <div className="relative w-full">
                                    <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-xl text-gray-800 rounded-lg border-gray-300 border-2" placeholder="Search product..." required onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === 'Enter' ? handleSearch(e) : ''} />
                                    <button type="submit" className="absolute top-0 right-0 p-2.5 h-full text-sm font-medium font-rubik text-white bg-[#8e5a3e] rounded-r-lg border hover:bg-secondary" onClick={handleSearch}>
                                        <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        <span className="sr-only">Search</span>
                                    </button>
                                </div>
                            </div>
                            <select onChange={handleSort} id="countries" className="w-max ml-3 text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-secondary focus:border-secondary block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="ASC">Price: Low to High</option>
                                <option value="DESC">Price: High to Low</option>
                            </select>
                            <select onChange={handleLimit} id="countries" className="w-max ml-3 text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-secondary focus:border-secondary block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="10">10</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                    <p className={`text-xl font-bold text-secondary mb-10 ${search !== '' ? 'block' : 'hidden'}`}>Hasil penelusuran anda "{search}"</p>
                    <Menu category={category} order={order} search={search} limit={limit} />
                    {/* <p>Apaa</p> */}
                </main>
            </section>
            <Footer />
        </>
    )
}


export default Product