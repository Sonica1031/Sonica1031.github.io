import React from "react";
import { Link } from "react-router-dom"

const NavBarList = prop => {
    return (
   <div>
       
    <Link exact to = {prop.html}>
        {prop.props}
    </Link>
    </div>
    
    )
}
export default NavBarList;