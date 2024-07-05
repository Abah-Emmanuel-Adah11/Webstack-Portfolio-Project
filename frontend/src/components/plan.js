import React from 'react';

import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const Plan = ({ text, updateMode, deletePlan }) => {
    return (
        <div className="Plan">
            <div className="text">{text}</div>
            <div className="icons">
                <BiEdit className="icon" onClick={updateMode} />
                <AiFillDelete className="icon" onClick={deletePlan} />
            </div>
        </div>
    );
};

export default Plan;