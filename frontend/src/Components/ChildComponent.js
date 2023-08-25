import React from "react";

function ChildComponent({ parentState, handleInputChange }) {
    return (
        <div>
            Child Component
            <input
                type="text"
                value={parentState}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder="Type to update parent state"
            />
        </div>
    );
}

export default ChildComponent;
