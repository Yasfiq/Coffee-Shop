// Imports
import NavbarBrand from "../Navbar-Brand/Navbar-Brand";
import Navlink from "../Navlink/Navlink";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../assets/styles/header.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../actions/userAction";
import cartIcon from "../../assets/images/icon/cart.svg";
// import searchIcon from "../../assets/images/icon/search.svg";
// import chatIcon from "../../assets/images/icon/chat-bubble-with-lines 1.svg";
import homeIcon from "../../assets/images/icon/mobile-home.svg";
import userIcon from "../../assets/images/icon/user-icon.svg";

const Header = (props) => {
  const [toggleState, setToggleState] = useState(false);
  const dispatch = useDispatch();
  const { getUserResult, getUserLoading, getUserError } = useSelector(
    (state) => state.userReducer
  );

  const handleLogout = () => {
    localStorage.removeItem("@userLogin");
    props.isLogin(false);
  };

  const handleToggle = () => {
    setToggleState((toggleState) => !toggleState);
  };

  const checkRole = () => {
    if (localStorage.getItem("@userLogin")) {
      return (
        <>
          <li className="cursor-pointer border-b-[0.1px] border-secondary/40 pb-3">
            <Link to="/edit-profile">Edit Profile</Link>
          </li>
          <li className="cursor-pointer border-b-[0.1px] border-secondary/40 pb-3">
            <Link to="/history">Orders</Link>
          </li>
          <li className="cursor-pointer border-b-[0.1px] border-secondary/40 pb-3">
            <Link to="/product">All menu</Link>
          </li>
          <li className="cursor-pointer border-b-[0.1px] border-secondary/40 pb-3">
            Privacy policy
          </li>
          <li className="cursor-pointer border-b-[0.1px] border-secondary/40 pb-3">
            Security
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="mt-20">
            <Link to="/login">
              <button
                type="button"
                className="btn-secondary rounded-full block mx-auto text-xl"
              >
                Login
              </button>
            </Link>
          </li>
          <li>
            <Link to="/register">
              <button
                type="button"
                className="btn-primary rounded-full text-xl mx-auto block"
              >
                Sign Up
              </button>
            </Link>
          </li>
        </>
      );
    }
  };

  let setActive = toggleState ? "active" : null;
  let navbarActive = toggleState ? "translate-x-0" : null;

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("@userLogin"));
    dispatch(getUserById(data && data.id));
  }, [dispatch]);

  if (props.authorized) {
    return (
      <>
        <header className="shadow-lg md:static fixed w-screen">
          {/* Navbar Bottom */}
          <div className="md:hidden fixed bottom-0 w-screen flex justify-between backdrop-blur-md px-8 py-6">
            <Link to="/product">
              <img
                src={homeIcon}
                alt="home-icon"
                className="shadow-lg shadow-secondary/40"
              />
            </Link>
            <Link to="/edit-profile">
              <img src={userIcon} alt="user-icon" className="h-8" />
            </Link>
            {/* <Link to="/chat">
              <img src={chatIcon} alt="chat-icon" className="h-8" />
            </Link> */}
          </div>
          {/* End Navbar Bottom */}

          {/* Mobile Navbar */}
          <div
            className={`fixed md:hidden h-screen w-screen cursor-pointer bg-black/20 duration-300 ease-in-out ${setActive || "hidden"
              }`}
            onClick={handleToggle}
          ></div>
          <div
            className={`w-[70%] z-10 md:hidden fixed h-screen overflow-hidden bg-white rounded-tr-3xl duration-300 ease-in-out ${navbarActive || "-translate-x-full"
              }`}
          >
            <div className="py-8 w-full text-center text-sm text-white bg-secondary">
              <img
                src={
                  getUserResult
                    ? `https://res.cloudinary.com/dgiwfhlhr/image/upload/v1769731269/${getUserResult[0].profile_image}.webp`
                    : ""
                }
                alt="Default"
                width="120"
                height="120"
                className="rounded-full mb-3 mx-auto"
              />
              {getUserResult ? (
                <>
                  <p className="font-bold">{getUserResult[0].name}</p>
                  <p>{getUserResult[0].email}</p>
                </>
              ) : getUserLoading ? (
                <>
                  <p></p>
                  <p></p>
                </>
              ) : getUserError ? (
                alert(getUserError)
              ) : (
                <p>User tidak ditemukan</p>
              )}
            </div>
            <ul className="p-6 font-rubik text-secondary text-base font-medium space-y-5">
              {checkRole()}
            </ul>
            <p
              className="text-center text-base text-secondary font-rubik cursor-pointer font-medium mt-10"
              onClick={handleLogout}
            >
              Logout →
            </p>
          </div>
          {/* End Mobile Navbar */}

          <nav className="flex justify-between container relative bg-white md:py-6 py-3">
            {/* Hamburger Button */}
            <div className="md:hidden cursor-pointer" onClick={handleToggle}>
              <div className="w-7 h-0.5 m-2 bg-slate-800"></div>
              <div className="w-5 h-0.5 m-2 bg-slate-800"></div>
              <div className="w-8 h-0.5 m-2 bg-slate-800"></div>
            </div>
            {/* End Hamburger Button */}

            {/* Features */}
            <div className="md:hidden flex space-x-5 items-center">
              {/* <img src={searchIcon} alt="search-icon" className="h-[1.7rem]" /> */}
              <Link to="/cart">
                <img src={cartIcon} alt="cart-icon" className="h-8" />
              </Link>
            </div>
            {/* End Features */}

            <NavbarBrand />

            <ul className="md:flex hidden justify-center items-center">
              <Navlink linkto="/" title="Home" active={props.home && true} />
              <Navlink
                linkto="/product"
                title="Product"
                active={props.product && true}
              />
              <Navlink
                linkto="/cart"
                title="Your Cart"
                active={props.cart && true}
              />
              <Navlink
                linkto="/history"
                title="History"
                active={props.history && true}
              />
            </ul>
            <div className="lg:flex hidden space-x-4 items-center">
              {/* <img
                src={require("../../assets/images/icon/search-icon.webp")}
                alt="icon search"
                width="30"
                height="30"
              /> */}
              {/* <div className="mx-4 relative space-x-2">
                <p className="bg-secondary w-auto h-auto p-1 text-xs absolute flex justify-center items-center rounded-full -top-2.5 -left-3 text-white">
                  99+
                </p>
                <img
                  src={require("../../assets/images/icon/chat-icon.webp")}
                  alt="chat-icon"
                  width="30"
                  height="30"
                />
              </div> */}
              <div className="flex items-center cursor-pointer">
                <img
                  src={
                    getUserResult
                      ? `https://res.cloudinary.com/dgiwfhlhr/image/upload/v1769731269/${getUserResult[0].profile_image}.webp`
                      : ""
                  }
                  alt="Default"
                  width="55"
                  height="60"
                  className="rounded-full mr-2"
                  onClick={handleToggle}
                />
                <div
                  className="text-secondary font-rubik"
                  onClick={handleToggle}
                >
                  {getUserResult ? (
                    <>
                      <p className="font-bold">{getUserResult[0].name}</p>
                      <p>{getUserResult[0].email}</p>
                    </>
                  ) : getUserLoading ? (
                    <>
                      <p></p>
                      <p></p>
                    </>
                  ) : getUserError ? (
                    alert(getUserError)
                  ) : (
                    <p>User tidak ditemukan</p>
                  )}
                </div>
              </div>
              <ul
                className={`absolute z-50 text-xl -bottom-72 right-32 text-secondary font-medium font-rubik ${setActive || "hidden"
                  }`}
              >
                <Link to="/edit-profile">
                  <li className="cursor-pointer select-none bg-white py-4 px-10 hover:bg-[#e1e1e1]">
                    Edit Profile
                  </li>
                </Link>
                <li className="cursor-pointer select-none bg-white py-4 px-10 hover:bg-[#e1e1e1]">
                  Orders
                </li>
                <li className="cursor-pointer select-none bg-white py-4 px-10 hover:bg-[#e1e1e1]">
                  Privacy Policy
                </li>
                <li className="cursor-pointer select-none bg-white py-4 px-10 hover:bg-[#e1e1e1]">
                  Security
                </li>
                <li
                  className="rounded-b-2xl cursor-pointer select-none bg-white py-4 px-10 hover:bg-[#e1e1e1]"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </>
    );
  } else {
    return (
      <>
        <header className="shadow-lg">
          {/* Mobile Navbar */}
          <div
            className={`absolute md:hidden h-screen w-screen cursor-pointer bg-black/20 duration-300 ease-in-out ${setActive || "hidden"
              }`}
            onClick={handleToggle}
          ></div>
          <div
            className={`w-[70%] md:hidden z-10 absolute h-screen overflow-hidden bg-white rounded-tr-3xl duration-300 ease-in-out ${navbarActive || "-translate-x-full"
              }`}
          >
            <div className="py-8 w-full text-center text-sm text-white bg-secondary">
              <img
                src={
                  getUserResult
                    ? `https://res.cloudinary.com/dgiwfhlhr/image/upload/v1769731269/coffeeshop/default_vohio0.webp`
                    : ""
                }
                alt="Default"
                width="120"
                height="120"
                className="rounded-full mb-3 mx-auto"
              />
            </div>
            <ul className="p-6 font-rubik text-secondary text-base font-medium space-y-5">
              {checkRole()}
            </ul>
          </div>
          {/* End Mobile Navbar */}

          <nav className="flex justify-between container mx-auto md:py-7 py-3">
            {/* Hamburger Button */}
            <div className="md:hidden cursor-pointer" onClick={handleToggle}>
              <div className="w-7 h-0.5 m-2 bg-slate-800"></div>
              <div className="w-5 h-0.5 m-2 bg-slate-800"></div>
              <div className="w-8 h-0.5 m-2 bg-slate-800"></div>
            </div>
            {/* End Hamburger Button */}

            {/* Features */}
            <div className="flex md:hidden space-x-5 items-center">
              {/* <Link to="/chat">
                <img src={chatIcon} alt="chat-icon" className="h-8" />
              </Link> */}
              {/* <img src={searchIcon} alt="search-icon" className="h-[1.7rem]" /> */}
              <Link to="/cart">
                <img src={cartIcon} alt="cart-icon" className="h-8" />
              </Link>
            </div>
            {/* End Features */}

            <NavbarBrand />
            <ul className="md:flex hidden justify-center items-center">
              <Navlink linkto="/" title="Home" active={props.home && true} />
              <Navlink
                linkto="/product"
                title="Product"
                active={props.product && true}
              />
              <Navlink
                linkto="/cart"
                title="Your Cart"
                active={props.cart && true}
              />
              <Navlink
                linkto="/history"
                title="History"
                active={props.history && true}
              />
            </ul>
            <div className="space-x-10 md:block hidden">
              <Link to="/login">
                <button type="button" className="text-secondary text-xl">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button
                  type="button"
                  className="btn-primary rounded-full text-xl"
                >
                  Sign Up
                </button>
              </Link>
            </div>
          </nav>
        </header>
      </>
    );
  }
};

export default Header;
