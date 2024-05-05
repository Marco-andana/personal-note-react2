import React from "react";
import { Link } from "react-router-dom";
import { FiPlusCircle } from "react-icons/fi";

function NoteAdd() {
    return (
        <div className="homepage__action action">
        <Link to='add'><FiPlusCircle /></Link>
        </div>
    )
}

export default NoteAdd;