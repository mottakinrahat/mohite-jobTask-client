import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">ManageTask</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li className='mr-2'><Link>Home</Link></li>
                        <li><Link to="/alltask">see all tasks</Link></li>
                        <li  className='mr-2'><Link to="/addTask">Add a task</Link></li>


                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;