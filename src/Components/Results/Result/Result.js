import "./Result.scss";

const Result = (props) => {
    return (
        <div className="result">
            <div className="label-container">
                <label>{props.label}</label>
                <span className="pax-label">/ person</span>
            </div>
            <div className="amount-container">
                <div className="amount">${props.amount}</div>
            </div>
        </div>
    );
};

export default Result;
