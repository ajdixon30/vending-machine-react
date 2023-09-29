import React from "react";
import { useSelector } from "react-redux";

const Screen = () => {
    let appState = useSelector(state => state.app);
    let input = appState.input;
    let message = appState.message;
    return (
        <div className="screenBox">
            {message ? (
                <div className="screenMessage overflow-hidden">{message}</div>
            ) : (
                <div className="text-center">{input}</div>
            )}
        </div>
    )
}

export default Screen;