import "./Reset.scss";

const Reset = (props) => {
    const onClickHandler = () => {
        props.onReset();
    };
    return (
        <div className="reset">
            <button
                className="btn secondary"
                onClick={onClickHandler}
                disabled={props.disabled}
            >
                Reset
            </button>
        </div>
    );
};

export default Reset;
