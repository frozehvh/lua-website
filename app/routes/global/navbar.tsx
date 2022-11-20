import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="navbar bg-base-100">
        <div className="flex-1">
            <a className="ml-3 normal-case text-3xl">Lua website</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
                <li><NavLink to="/features" className="selected">Features</NavLink></li>
                <li><NavLink to="/purchase" className="selected">Purchase</NavLink></li>
                <li><NavLink to="/terms" className="selected">Terms</NavLink></li>
            </ul>
        </div>
    </div>
  );
}
export default Header;