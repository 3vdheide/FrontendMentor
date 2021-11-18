import { useState } from "react";
import "./FieldContainer.scss";

const FieldContainer = (props) => {
    const [hasError, setHasError] = useState(false);

    const onChangeHandler = (event) => {
        props.onChangeHandler(event.target.value);
    };

    const onBlurHandler = (event) => {
        const ZeroOrEmpty =
            event.target.value === "" || event.target.value === "0";
        setHasError(ZeroOrEmpty);
        props.onChangeHandler(event.target.value);
    };

    const onClickHandler = (event) => {
        setHasError(false);
        event.target.select();
    };

    if (props.reset && hasError) {
        setHasError(false);
    }

    return (
        <div className="field-container">
            <div className="label-container">
                <label htmlFor={props.id}>{props.label}</label>
                {hasError ? <div className="error">{props.error}</div> : null}
            </div>
            <div className="input-container">
                <img
                    src={props.iconSrc}
                    className={props.iconClasses}
                    alt={props.iconAlt}
                />
                <input
                    className={hasError ? "error" : ""}
                    type={props.inputType}
                    name={props.id}
                    id={props.id}
                    placeholder={props.placeholder}
                    onClick={onClickHandler}
                    onChange={onChangeHandler}
                    onBlur={onBlurHandler}
                    value={props.value}
                />
            </div>
        </div>
    );
};

export default FieldContainer;
