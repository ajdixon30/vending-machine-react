import React from "react";
import Items from "./Items";
import Keypad from "./Keypad";

const MachineBody = () => {
    return (
        <div className="container">
            <div className="col-6 offset-3 border border-2 mt-3 bg-dark">
                <div className="row">
                    <Items />
                    <Keypad />
                </div>
            </div>
        </div>
    )
}

export default MachineBody;