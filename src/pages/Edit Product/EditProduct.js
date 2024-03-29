import Header from "../../components/Header/Header";
import cameraIcon from "../../assets/images/icon/camera-icon.svg";
import "../../assets/styles/add-product.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProduct } from "../../actions/productAction";
import { useState, useEffect } from "react";

const EditProduct = () => {
  let [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    filepreview: null,
    previews: null,
  });
  const { editError } = useSelector((state) => state.productReducer);
  const [product, setProduct] = useState([]);
  let navigation = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (localStorage.getItem("@userLogin")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    dispatch(editProduct(id, data));
    if (editError) {
      alert("Failed to update data product!");
    } else {
      alert(`Successfully update data id=${id}`);
      navigation("/product");
    }
  };

  const handleInputChange = (e) => {
    setUserInfo({
      ...userInfo,
      filepreview: URL.createObjectURL(e.target.files[0]),
      previews: Array.from(e.target.files),
    });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/products/${id}`)
      .then((res) => {
        setProduct(res.data.Data);
        // if (product[0]) {
        //     let r = ''
        //     let l = ''
        //     let xl = ''
        //     product[0].size.map(item => {
        //         if (item == 'r') {
        //             r += true
        //         } else if (item == 'l') {
        //             l += true
        //         } else if (item == 'xl') {
        //             xl += true
        //         }
        //     })
        //     console.log(r);
        //     console.log(l);
        //     console.log(xl);
        // }
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <>
      <Header product isLogin={setIsLogin} authorized={isLogin} />
      <form
        className="container mx-auto font-rubik grid grid-cols-12 py-10"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <p className="col-span-12 text-xl">
          Product{" "}
          <span className="text-secondary font-bold">&#62; Edit product</span>
        </p>
        <div className="col-span-4 flex flex-col p-10 pt-16">
          <div className="w-72 h-72 flex justify-center items-center overflow-hidden mx-auto bg-[#bababa40] rounded-full mb-10">
            <img
              src={
                userInfo.filepreview !== null
                  ? userInfo.filepreview
                  : product[0]
                  ? `https://res.cloudinary.com/dcf12mtca/image/upload/v1678543339/${product[0].productimage[0].filename}.webp`
                  : cameraIcon
              }
              alt="camera-icon"
              width="100%"
            />
          </div>
          <div className="w-full p-3 grid grid-cols-3 gap-3 items-center rounded-xl bg-[#f4f4f4]">
            {userInfo.previews !== null
              ? userInfo.previews.map((image) => {
                  return (
                    <>
                      <img
                        src={URL.createObjectURL(image)}
                        alt="img 1"
                        className="block h-full mr-3"
                      />
                    </>
                  );
                })
              : product[0]
              ? product[0].productimage.map((image) => {
                  return (
                    <>
                      <img
                        src={`https://res.cloudinary.com/dcf12mtca/image/upload/v1678543339/${image.filename}.webp`}
                        alt={`${image.name}`}
                        className="block h-full mr-3"
                      />
                    </>
                  );
                })
              : ""}
          </div>
          <input
            className="hidden"
            type="file"
            name="productimage"
            id="productimage"
            onChange={handleInputChange}
            multiple
          />
          <label
            for="productimage"
            className="btn-primary hover:shadow-xl hover:shadow-primary/50 duration-500 self-center cursor-pointer text-xl py-5"
          >
            Choose from gallery
          </label>
          <h3 className="mt-20 text-xl text-secondary font-bold mb-5">
            Delivery Hour :
          </h3>
          <select className="group mb-5 py-3 px-5 rounded-full bg-transparent focus:outline-none focus:ring-1 focus:ring-[#9F9F9F] border border-[#9F9F9F] appearance-none">
            <option className="group-focus:hidden">Select start hour</option>
            <option>Option 1</option>
          </select>
          <select className="group py-3 px-5 rounded-full bg-transparent focus:outline-none focus:ring-1 focus:ring-[#9F9F9F] border border-[#9F9F9F] appearance-none">
            <option className="group-focus:hidden">Select end hour</option>
            <option>Option 1</option>
          </select>
          {/* STOCK */}
          <h3 className="mt-20 text-xl text-secondary font-bold mb-5">
            Input stock :
          </h3>
          <select className="group py-3 px-5 rounded-full bg-transparent focus:outline-none focus:ring-1 focus:ring-[#9F9F9F] border border-[#9F9F9F] appearance-none">
            <option className="group-focus:hidden">Input Stock</option>
            <option>Option 1</option>
          </select>
          {/* end STOCK */}
          {/* <img src={(product[0]) && `http://localhost:3000/uploads/${product[0].productimage[0].filename}`} className="block h-72 w-72 rounded-full bg-cover bg-center bg-no-repeat mx-auto mt-4" alt={(product[0]) && product[0].productimage[0].name} /> */}
        </div>
        <div className="col-span-8 px-20 py-10">
          <label for="productname" className="font-bold text-secondary text-xl">
            Name :
          </label>
          <input
            type="text"
            id="productname"
            name="productname"
            className="input-oneline text-base mb-10"
            placeholder="Type product name min.3 characters"
            defaultValue={`${product[0] ? product[0].productname : ""}`}
          />
          {/*  */}
          <label for="price" className="font-bold text-secondary text-xl">
            Price :
          </label>
          <input
            type="text"
            id="price"
            name="price"
            className="input-oneline text-base mb-10"
            placeholder="Type the price"
            defaultValue={`${product[0] ? product[0].price : ""}`}
          />
          {/*  */}
          <label for="category" className="font-bold text-secondary text-xl">
            Category :
          </label>
          <input
            type="text"
            id="category"
            name="category"
            className="input-oneline text-base mb-10"
            placeholder="Type the category"
            defaultValue={`${
              product[0] && product[0].category !== "undefined"
                ? product[0].category
                : ""
            }`}
          />
          {/*  */}
          <label for="description" className="font-bold text-secondary text-xl">
            Description :
          </label>
          <input
            type="text"
            id="description"
            name="description"
            className="input-oneline text-base mb-10"
            placeholder="Describe your product min. 100 characters"
            defaultValue={`${
              product[0] && product[0].description !== undefined
                ? product[0].description
                : ""
            }`}
          />
          <h3 className="font-bold text-secondary text-xl">
            Input product size :
          </h3>
          <p className="text-[#9F9F9F] mt-1 text-base">
            Click size you want to use for this product
          </p>
          <div className="flex pt-5 space-x-6 mb-10">
            <input
              type="checkbox"
              id="r"
              name="size"
              value="r"
              className="hidden size-r"
            />
            <label
              for="r"
              className="w-16 h-16 bg-third/30 flex justify-center items-center rounded-full box-border text-4xl font-bold text-blold r"
            >
              R
            </label>
            {/*  */}
            <input
              type="checkbox"
              id="l"
              name="size"
              value="l"
              className="hidden size-l"
            />
            <label
              for="l"
              className="w-16 h-16 bg-third/30 flex justify-center items-center rounded-full box-border text-4xl font-bold text-blold l"
            >
              L
            </label>
            {/*  */}
            <input
              type="checkbox"
              id="xl"
              name="size"
              value="xl"
              className="hidden size-xl"
            />
            <label
              for="xl"
              className="w-16 h-16 bg-third/30 flex justify-center items-center rounded-full box-border text-4xl font-bold text-blold xl"
            >
              XL
            </label>
          </div>
          {/*  */}
          <h3 className="font-bold text-secondary text-xl">
            Input delivery methods :
          </h3>
          <p className="text-[#9F9F9F] mt-1 text-base">
            Click methods you want to use for this product
          </p>
          <div className="flex pt-5 space-x-6">
            {/*  */}
            <input
              type="checkbox"
              id="dine-in"
              name="delivery"
              value="dine-in"
              className="hidden d-dine-in"
            />
            <label
              for="dine-in"
              className="bg-third/30 flex justify-center items-center rounded-full py-3 px-4 text-2xl font-bold text-blold dine-in"
            >
              Dine in
            </label>
            {/*  */}
            <input
              type="checkbox"
              id="take-away"
              name="delivery"
              value="take-away"
              className="hidden d-take-away"
            />
            <label
              for="take-away"
              className="bg-third/30 flex justify-center items-center rounded-full py-3 px-4 text-2xl font-bold text-blold take-away"
            >
              Take away
            </label>
            {/*  */}
            <input
              type="checkbox"
              id="home-delivery"
              name="delivery"
              value="home-delivery"
              className="hidden d-home-delivery"
            />
            <label
              for="home-delivery"
              className="bg-third/30 flex justify-center items-center rounded-full py-3 px-4 text-2xl font-bold text-blold home-delivery"
            >
              Home delivery
            </label>
          </div>
          <div className="mt-16 space-x-8">
            <button
              type="submit"
              className="btn-secondary py-4 px-6 text-2xl save-btn"
            >
              Save Product
            </button>
            <Link to="/product">
              <button
                type="button"
                className="py-4 px-6 font-bold text-2xl bg-third/30 rounded-xl text-blold"
              >
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditProduct;
