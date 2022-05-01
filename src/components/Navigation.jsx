 import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo';

function navLinkClassName ( { linkClass }) {
    return isActive ? linkClass + " text-white bg-gray-800" : linkClass
}

class Navigation extends React.Component {

    navLinkClassName ( { isActive }) {
        let linkClass = "flex items-center content-center px-4 h-full text-bold";
        return isActive ? linkClass + " text-white bg-gray-800" : linkClass;
    }

    render () {

        return (
            <nav className="navigation h-12 border-b">
                <div className="flex h-full max-w-6xl mx-auto">
                    <Logo className="flex h-full mr-auto"/>
                    <ul className="flex h-full items-center">
                        <li className="flex h-full">
                            <NavLink to='/' className={ this.navLinkClassName }>Home</NavLink>
                            
                        </li>
                        <li className="flex h-full">
                            <NavLink to='/todo' className={ this.navLinkClassName }>Todo</NavLink>
                        </li>
                        <li className="flex h-full">
                            <NavLink to='/about' className={ this.navLinkClassName } >About</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation;