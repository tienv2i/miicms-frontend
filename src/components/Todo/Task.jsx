import React from "react";
import { useParams } from "react-router-dom";
var Task = (props) => {
    let params = useParams();
    return (
        <div className="home">
            This is task page, task id: {params.id}
        </div>
    );
}

export default Task;