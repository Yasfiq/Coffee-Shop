// Imports
import React from "react"


const NavbarBrand = () => {
    return (
        <>
            <a href="index.html" className='flex items-center font-rubik font-bold text-xl'>
            <img src={require('../../assets/images/icon/logo-coffee-shop.webp')} alt="Logo Coffee Shop" className='block h-8 mr-3.5'/>
            Coffee Shop
            </a>
        </>
    )
}


export default NavbarBrand