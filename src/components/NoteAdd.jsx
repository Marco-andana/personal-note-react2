import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

function NoteAdd() {
    return (
        <div className="homepage__action">
        <Link to='add' className="action"><FiPlus /></Link>
        </div>
    )
}

export default NoteAdd;