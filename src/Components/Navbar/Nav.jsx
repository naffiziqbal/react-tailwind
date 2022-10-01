import React, { useState } from 'react';
import NavItems from '../NavItems';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const Nav = () => {
    const [open, setOpen] = useState(false);


    const routes = [
        {id:1, name : "Home", path: '/home'},
        {id:2, name : "Products", path: '/products'},
        {id:3, name : "Orders", path: '/home'},
        {id:4, name : "Contacts", path: '/home'},
    ]
    return (
        <nav className='text-center align-middle justify-center'>


            <div className=' w-10 md:hidden' onClick={() => setOpen(!open)}>
            {
                open ? <XMarkIcon /> :  <Bars3Icon />
            }

            </div>

            <ul className={ ` md:flex justify-center absolute md:static   ${ open ? "top-10 " : " -inset-y-80"} w-full bg-slate-800 text-white h-40 pt-4 duration-1000 ease-in `}>

            {
                routes.map(route=> <NavItems 
                    key = {route.id}
                    route = {route} />)
            }
            </ul>
        </nav>
    );
};

export default Nav;
