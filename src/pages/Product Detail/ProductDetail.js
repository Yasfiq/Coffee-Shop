import axios from "axios";
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React from "react";
import "../../assets/styles/product-detail.css";
import PaymentMethod from "./Payment Method/Payment-Method";
import Time from "./Time/Time";
import Size from "./Size/Size";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../../actions/orderAction";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState([]);
  let [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { addOrderResult, addOrderLoading, addOrderError } = useSelector(
    (state) => state.orderReducer
  );

  const handleQuantity = (event) => {
    setQuantity(event.target.value);
  };
  const plusQuantity = () => {
    setQuantity((quantity += 1));
  };
  const minusQuantity = (event) => {
    setQuantity((quantity -= 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    form.append("id_product", id);
    form.append("product_name", product[0].productname);
    form.append("total_price", parseInt(product[0].price) * quantity * 1000);
    form.append("id_user", JSON.parse(localStorage.getItem("@userLogin")).id);
    form.append("name", JSON.parse(localStorage.getItem("@userLogin")).name);
    form.append("product_image", product[0].productimage[0].filename);

    const data = new URLSearchParams(form);

    dispatch(addOrder(data));
  };

  React.useEffect(() => {
    if (quantity < 1) {
      setQuantity(1);
    }
    axios
      .get(`https://hilarious-ox-shawl.cyclic.app/api/v1/products/${id}`)
      .then((response) => {
        setProduct(response.data.Data);
      });
  }, [id, quantity]);
  return (
    <>
      <Header product authorized />
      <form
        className="container grid grid-cols-12 gap-x-20 gap-y-10 mx-auto py-10"
        onSubmit={handleSubmit}
      >
        <p className="col-span-12 font-rubik text-base">
          Product &#62;{" "}
          <span className="text-secondary font-bold">
            {product[0] && product[0].productname}
          </span>
        </p>
        <div className="col-span-6 py-5">
          <img
            src={
              product[0] &&
              `https://res.cloudinary.com/dcf12mtca/image/upload/v1678543339/${product[0].productimage[0].filename}.webp`
            }
            className="block h-72 w-72 rounded-full bg-cover bg-center bg-no-repeat mx-auto mt-4"
            alt={product[0] && product[0].productimage[0].name}
          />
          <div className="p-6 bg-white rounded-3xl mt-20 shadow-2xl border-2 font-poppins">
            <h3 className="font-bold text-2xl mb-4">Delivery and Time</h3>
            <PaymentMethod />
            <Time />
          </div>
        </div>
        <div className="col-span-6 text-secondary">
          <h1 className="text-6xl font-poppins font-black text-center text-black">
            {product[0] ? product[0].productname : ""}
          </h1>
          <p className="mt-5 text-xl">
            {product[0] ? product[0].description : ""}
          </p>
          <div className="flex items-center mt-20 justify-between font-poppins">
            <div className="flex">
              <div
                className="cursor-pointer p-3 rounded-l-xl border-2 border-third text-2xl font-bold"
                onClick={minusQuantity}
              >
                <span className="select-none">-</span>
              </div>
              <input
                type="number"
                name="quantity"
                id="quantity"
                min="1"
                className="p-3 w-16 text-xl max-w-min border-y-2 border-third font-bold"
                onChange={handleQuantity}
                defaultValue="1"
                value={quantity}
              />
              <div
                className="cursor-pointer p-3 rounded-r-xl border-2 border-third text-2xl font-bold"
                onClick={plusQuantity}
              >
                <span className="select-none">+</span>
              </div>
            </div>
            <p className="text-4xl font-bold text-black">{`IDR ${
              product[0] ? parseInt(product[0].price) * quantity * 1000 : ""
            }`}</p>
          </div>
          <button type="submit" className="btn-primary w-full text-4xl mt-16">
            Add to cart
          </button>
          <button className="btn-secondary w-full text-4xl mt-5">
            Ask a staff
          </button>
        </div>
        <div className="col-span-5 flex-col flex items-center border-2 p-5 rounded-3xl shadow-2xl">
          <h3 className="text-4xl font-black font-poppins text-center">
            Choose a size
          </h3>
          <Size />
        </div>
      </form>
      <Footer />
    </>
  );
};

export default ProductDetail;
