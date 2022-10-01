import React from 'react';

const NavItems = ({route}) => {
    return (
        <div>
            
            <li className="mr-10 text-start pl-5"><a href={route.path}>{route.name}</a></li>
        </div>
    );
};

export default NavItems;
