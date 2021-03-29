import React from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

const GradientLink = ({to, text, size}) => {
    const classes = classNames({
        'flex justify-center rounded-full py-2 px-6 bg-gradient focus:outline-none shadow-lg text-white': true,
        'text-xl': size === 'lg'
    });

    return (
        <Link to={to} className={classes}>
            {text}
        </Link>
    );
};

export default GradientLink;
