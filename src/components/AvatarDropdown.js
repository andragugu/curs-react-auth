import React, {useState, useRef} from 'react';
import {faCaretDown, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import defaultAvatar from '../images/defaultAvatar.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const DropdownItem = ({item}) => (
    <button onClick={item.onClick} className="text-gray-700 flex items-center">
        <FontAwesomeIcon icon={item.icon}/>
        <p className="ml-2">{item.title}</p>
    </button>
)

const DrodownContent = ({dropdownItems}) => {
    return (
        <div className="bg-white w-full absolute p-4 shadow-lg rounded-lg mt-2">
            {dropdownItems.map((item, i) => {
                return (
                    <div className="mt-1" key={i}>
                        <DropdownItem item={item}/>
                    </div>
                )
            })}
        </div>
    )
}

const AvatarDropDown = () => {
    const node = useRef();
    const [drodownOpen, setDropdownOpen] = useState(false);


    const dropdownItems = [
        {
            title: 'Log Out',
            icon: faSignOutAlt,
        }
    ]

    return (
        <div ref={node}>
            <button className="flex rounded-full items-center py-2 px-3 bg-gradient focus:outline-none shadow-lg">
                <img src={defaultAvatar} alt="Avatar" className="rounded-full border-2 border-white w-6"/>
                <div className="px-3">
                    <p className="text-white">Andra</p>
                </div>
                <div className="mr-1 text-white">
                    <FontAwesomeIcon icon={faCaretDown}/>
                </div>
            </button>
            {
                drodownOpen && (
                    <div className="relative">
                        <DrodownContent dropdownItems={dropdownItems}/>
                    </div>
                )
            }
        </div>
    )
}

export default AvatarDropDown;
