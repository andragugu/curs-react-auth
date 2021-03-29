import React from 'react';
import AvatarDropDown from "./AvatarDropdown";

const Navbar = () => {
    return (
        <nav className="flex justify-between px-4">
            <div>
                <AvatarDropDown/>
            </div>
        </nav>
    )
}

export default Navbar;
