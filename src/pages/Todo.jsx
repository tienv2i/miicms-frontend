import React from "react";
import { Outlet, Link } from "react-router-dom";
import Popup from "reactjs-popup";

function Todo (props) {
    return (
        <div className="about">
            This is todo page
            <Link to='/todo/tasks' className="inline-block text-white m-2 p-4 bg-red-800">Tasks</Link>
            <Link to='/todo/task/123' >Task 123</Link>
            
            <Outlet />
        </div>
    );
}
export default Todo;