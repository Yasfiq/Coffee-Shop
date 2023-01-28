// Imports
import React from "react";
import { Link } from "react-router-dom";


const Navlink = (props) => {
    return (
        <>
            <li className="mr-5">
                <Link to={`${props.linkto}`} data={props.data}>
                    <p className={`text-secondary font-rubik text-xl ${props.active && 'font-bold'}`}>{props.title}</p>
                </Link>
            </li>
        </>
    )
}

export default Navlink