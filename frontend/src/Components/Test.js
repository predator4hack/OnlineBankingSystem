import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
import Input from "./Auth/Input";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

const Test = () => {
    const [parentState, setParentState] = useState("");
    console.log("test");
    return (
        <div>
            {/* <ChildComponent
                parentState={parentState}
                handleInputChange={setParentState}
            />
            <Input
                type="text"
                placeholder="First Name"
                handleInputChange={setParentState}
            />
            <p>Parent State: {parentState}</p>
            <Icon icon="mdi-light:plus" /> */}
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/transact">payments</NavLink>
        </div>
    );
};

export default Test;
