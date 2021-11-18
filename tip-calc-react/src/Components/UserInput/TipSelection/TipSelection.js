import { useState } from "react";
import "./TipSelection.scss";

const TipSelection = (props) => {
    const [activeState, setActiveState] = useState("");
    const [customTip, setCustomTip] = useState("");

    const tipChangedHandler = (event) => {
        setActiveState(event.target.name);
        event.target.name === "customTip"
            ? setCustomTip(event.target.value)
            : setCustomTip("");

        props.onTipChanged(event.target.value);
    };

    if (props.reset) {
        if (activeState === "customTip") {
            setCustomTip("");
        }
        if (activeState !== "") {
            setActiveState("");
        }
    }

    return (
        <div className="tip-selection">
            <label>Select Tip %</label>
            <div className="percentages">
                <button
                    onClick={tipChangedHandler}
                    className={activeState === "5" ? "btn active" : "btn"}
                    value={5}
                    name="5"
                >
                    5%
                </button>
                <button
                    onClick={tipChangedHandler}
                    className={activeState === "10" ? "btn active" : "btn"}
                    value={10}
                    name="10"
                >
                    10%
                </button>
                <button
                    onClick={tipChangedHandler}
                    className={activeState === "15" ? "btn active" : "btn"}
                    value={15}
                    name="15"
                >
                    15%
                </button>
                <button
                    onClick={tipChangedHandler}
                    className={activeState === "25" ? "btn active" : "btn"}
                    value={25}
                    name="25"
                >
                    25%
                </button>
                <button
                    onClick={tipChangedHandler}
                    className={activeState === "50" ? "btn active" : "btn"}
                    value={50}
                    name="50"
                >
                    50%
                </button>
                <input
                    className={activeState === "customTip" ? "active" : ""}
                    type="number"
                    name="customTip"
                    placeholder="Custom"
                    value={customTip}
                    onChange={tipChangedHandler}
                />
            </div>
        </div>
    );
};

export default TipSelection;
