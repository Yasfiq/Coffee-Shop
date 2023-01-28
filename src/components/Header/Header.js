// Imports
import NavbarBrand from "../Navbar-Brand/Navbar-Brand";
import Navlink from "../Navlink/Navlink";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../assets/styles/header.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../actions/userAction";

const Header = (props) => {
  const [toggleState, setToggleState] = useState(false);
  const dispatch = useDispatch();
  const { getUserResult, getUserLoading, getUserError } = useSelector(state => state.userReducer);

  const handleLogout = () => {
    localStorage.removeItem("@userLogin");
    props.isLogin(false);
  };

  const handleToggle = () => {
    setToggleState(toggleState => !toggleState);
  };

  let setActive = toggleState ? "active" : null;

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('@userLogin'))
      dispatch(getUserById(data && data.id))
  },[dispatch])

  if (props.authorized) {
    return (
      <>
        <header className="shadow-lg h-28">
          <nav className="flex justify-between container relative py-8">
            <NavbarBrand />
            <ul className="flex justify-center items-center">
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
            <div className="flex space-x-4 items-center">
              <img
                src={require("../../assets/images/icon/search-icon.webp")}
                alt="icon search"
                width="30"
                height="30"
              />
              <div className="mx-4 relative space-x-2">
                <p className="bg-secondary w-auto h-auto p-1 text-xs absolute flex justify-center items-center rounded-full -top-2.5 -left-3 text-white">
                  99+
                </p>
                <img
                  src={require("../../assets/images/icon/chat-icon.webp")}
                  alt="chat-icon"
                  width="30"
                  height="30"
                />
              </div>
              <div className="flex items-center cursor-pointer">
                <img
                  src={getUserResult ? `http://localhost:3000/uploads/${getUserResult[0].profile_image}` : ''}
                  alt="Default"
                  width="55"
                  height="60"
                  className="rounded-full mr-2"
                  onClick={handleToggle}
                />
                <div className="text-secondary font-rubik" onClick={handleToggle}>
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
                  ) : getUserError ? alert(getUserError) : (<p>User tidak ditemukan</p>)}
                </div>
              </div>
              <ul
                className={`absolute z-50 text-xl -bottom-72 right-32 text-secondary font-medium font-rubik ${setActive || 'hidden'}`}
              >
                <Link to='/edit-profile'>
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
          <nav className="flex justify-between container mx-auto py-7">
            <NavbarBrand />
            <ul className="flex justify-center items-center">
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
            <div className="space-x-10">
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
