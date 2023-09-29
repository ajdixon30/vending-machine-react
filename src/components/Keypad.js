import React, { useState } from "react";
import Screen from "./Screen";
import { useDispatch, useSelector } from "react-redux";
import { buttonPress, invalidPurchase, validPurchase } from "../actions/appActions";

const Keypad = () => {
    const dispatch = useDispatch();
    const appState = useSelector(state => state.app);
    let input = appState.input;
    let items = appState.items;
    const buttons = ['ABC', 'DEF', '123'];
    const [newInput, setNewInput] = useState(input);
    const handleButtonPress = (event) => {
        setNewInput(newInput + event.target.textContent);
        dispatch(buttonPress(newInput + event.target.textContent, items));
    }
    const handleBackSpace = () => {
        let newString = newInput.substring(0, newInput.length - 1);
        setNewInput(newString);
        dispatch(buttonPress(newString, items));
    }
    const handleItemSelection = () => {
        const selectedItem = items.filter((item) => item.position === newInput);
        if (selectedItem.length) {
            if (selectedItem[0].quantity > 0) {
                const alteredItems = items.map((item) => {
                    if (item.name === selectedItem[0].name) {
                        return {
                            name: item.name,
                            price: item.price,
                            quantity: item.quantity - 1,
                            position: item.position,
                            image: item.image
                        }
                    }
                    return item;
                })
                console.log(alteredItems);
                dispatch(validPurchase("Vending...", alteredItems));
            } else {
                dispatch(invalidPurchase("Out of stock.", items))
            }
        } else {
            dispatch(invalidPurchase("Invalid Selection.", items));
        }
        setNewInput("");
    } 
    return (
        <div className="col-4 align-self-center ps-0">
            <div className="row mx-0">
                <Screen />
            </div>
            <div className="row mx-0">
                {buttons.map((button, index) => {
                    return (
                        <div key={index} className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-secondary border border-light" onClick={handleButtonPress}>{ button[0] }</button>
                            <button type="button" className="btn btn-secondary border border-light" onClick={handleButtonPress}>{ button[1] }</button>
                            <button type="button" className="btn btn-secondary border border-light" onClick={handleButtonPress}>{ button[2] }</button>
                        </div>
                    )
                })}
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-secondary border border-light" onClick={handleBackSpace}>Delete</button>
                    <button type="button" className="btn btn-secondary border border-light" onClick={handleItemSelection}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Keypad;