import React from 'react';
import {faCircleNotch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Button = ({type, text, loading}) => (
    <button type={type}
            className="group relative flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white bg-gradient focus:outline-none shadow-lg ease-in-out duration-100 transition active:bg-blue-700 focus:shadow-outline-blue focus:border-blue-700">
        {
            loading ? (
                <span className="fles items-center">
                    <FontAwesomeIcon icon={faCircleNotch} spin/>
                    <span className="ml-2">Loading...</span>

                </span>
            ) : (
                <span>{text}</span>
            )
        }
    </button>
)
export default Button;
