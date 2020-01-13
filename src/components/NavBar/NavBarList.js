import React, {useState} from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const NavBarList = prop => {

    return (
   
    <a href = {prop.html}>
        {prop.props}
    </a>

    
    )
}
export default NavBarList;