import React from "react";
import navItems from "../../data";
import NavBarList from "./NavBarList"

const NavBar = () => {
return (
    <nav>
        {navItems.map(x => <NavBarList prop = {x} />)}
        {navItems.map(x => <NavBarList html = {x + ".html"} />)}
    </nav>
)
};
export default NavBar;