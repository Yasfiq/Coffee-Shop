import axios from "axios";
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"
import React from "react";
import '../../assets/styles/product-detail.css'


const ProductDetail = () => {
    let { id } = useParams();
    const [product, setProduct] = React.useState([]);
    let [quantity, setQuantity] = React.useState(1);
    const handleQuantity = (event) => {
        setQuantity(event.target.value)
    }
    const plusQuantity = () => {
        setQuantity(quantity+=1)
    }
    const minusQuantity = (event) => {
        setQuantity(quantity-=1)
    }

    React.useEffect(() => {
        if(quantity < 1) {
            setQuantity(1)
        }
        axios.get(`http://localhost:3000/api/v1/products/${id}`).then((response) => {
            setProduct(response.data.Data)
        });
    }, [id,quantity]);
    return (
        <>
            <Header product authorized />
            <form className="container grid grid-cols-12 gap-x-20 gap-y-10 mx-auto py-10">
                <p className="col-span-12 font-rubik text-base">Product &#62; <span className="text-secondary font-bold">{(product[0]) && product[0].productname}</span></p>
                <div className="col-span-6 py-5">
                    <img src={(product[0]) && `http://localhost:3000/uploads/${product[0].productimage[0].filename}`} className="block h-72 w-72 rounded-full bg-cover bg-center bg-no-repeat mx-auto mt-4" alt={(product[0]) && product[0].productimage[0].name} />    
                    <div className="p-6 bg-white rounded-3xl mt-20 shadow-2xl border-2 font-poppins">
                        <h3 className="font-bold text-2xl mb-4">Delivery and Time</h3>
                        <div className="py-5">
                            <input type="radio" id="dine-in" className="hidden checkRadio" name="delivery" value="dine-in"/>
                            <label htmlFor="dine-in" className="dine-in btn-third mr-4 text-xl font-black">Dine in</label>
                            {/*  */}
                            <input type="radio" name="delivery" id="home-delivery" className="hidden checkRadio"/>
                            <label htmlFor="home-delivery" className="btn-third mr-4 text-xl font-black">Home delivery</label>
                            {/*  */}
                            <input type="radio" name="delivery" id="take-away" className="hidden checkRadio"/>
                            <label htmlFor="take-away" className="btn-third mr-4 text-xl font-black">Take away</label>
                        </div>
                        <div className="flex mt-4">
                            <p className="text-xl mr-8 self-center">Now</p>
                            <input type="radio" name="time" id="now" className="hidden checkRadio" />
                            <label htmlFor="now" className="btn-third mr-4 text-xl font-blavk">Yes</label>
                            <input type="radio" name="time" id="nnow" className="hidden checkRadio" />
                            <label htmlFor="nnow" className="btn-third mr-4 text-xl font-black">No</label>
                        </div>
                        <div className="flex mt-6">
                            <label htmlFor="time" className="text-xl mr-8 self-center">Set Time</label>
                            <input type="text" name="time" id="time" placeholder="Enter time for reservation" className="bg-third/30 py-3 px-4 rounded-xl placeholder:text-blold" />
                        </div>
                    </div>
                </div>
                <div className="col-span-6 text-secondary">
                    <h1 className="text-6xl font-poppins font-black text-center text-black">{(product[0]) ? product[0].productname : ''}</h1>
                    <p className="mt-5 text-xl">{(product[0]) ? product[0].description : ''}</p>
                    <div className="flex items-center mt-20 justify-between font-poppins">
                        <div className="flex">
                            <div className="cursor-pointer p-3 rounded-l-xl border-2 border-third text-2xl font-bold" onClick={minusQuantity}><span className="select-none">-</span></div>
                            <input type="number" name="quantity" id="quantity" min="1" className="p-3 w-12 text-xl max-w-min border-y-2 border-third font-bold" onChange={handleQuantity} defaultValue="1" value={quantity} />
                            <div className="cursor-pointer p-3 rounded-r-xl border-2 border-third text-2xl font-bold" onClick={plusQuantity}><span className="select-none">+</span></div>
                        </div>
                        <p className="text-4xl font-bold text-black">{`IDR ${(product[0]) ? (parseInt(product[0].price)*quantity*1000) : ''}`}</p>
                    </div>
                    <button className="btn-primary w-full text-4xl mt-16">Add to cart</button>
                    <button className="btn-secondary w-full text-4xl mt-5">Ask a staff</button>
                </div>
                <div className="col-span-5 flex-col flex items-center border-2 p-5 rounded-3xl shadow-2xl">
                    <h3 className="text-4xl font-black font-poppins text-center">Choose a size</h3>
                    <div className="flex pt-5">
                        <input type="checkbox" id="r" name="size" value="r" className="hidden size-r" />
                        <label for="r" className="mr-4 w-16 h-16 bg-third/30 flex justify-center items-center rounded-full box-border text-2xl font-bold font-poppins text-blold r" >R</label>
                        {/*  */}
                        <input type="checkbox" id="l" name="size" value="l" className="hidden size-l" />
                        <label for="l" className="mr-4 w-16 h-16 bg-third/30 flex justify-center items-center rounded-full box-border text-2xl font-bold font-poppins text-blold l" >L</label>
                        {/*  */}
                        <input type="checkbox" id="xl" name="size" value="xl" className="hidden size-xl" />
                        <label for="xl" className="mr-4 w-16 h-16 bg-third/30 flex justify-center items-center rounded-full box-border text-2xl font-bold font-poppins text-blold xl" >XL</label>
                    </div>
                </div>
            </form>
            <Footer />
        </>
    )
}


export default ProductDetail