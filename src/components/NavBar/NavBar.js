import React, {useState} from "react";
import {navItems} from "../../../src/data";
import NavBarList from "./NavBarList"
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function NavBar() {
    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);
return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle>
            Menu
        </DropdownToggle>
        <DropdownMenu>
    <nav className = "NavBar">
        {navItems.map(x => <DropdownItem><NavBarList props = {x.title} html = {x.value + ".html"} /> <DropdownItem divider></DropdownItem></DropdownItem>)}
    </nav>
    </DropdownMenu>
    </ButtonDropdown>
)
};
export default NavBar;