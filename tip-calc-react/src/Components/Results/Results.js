import "./Results.scss";
import Result from "./Result/Result";
import Reset from "./Reset/Reset";

const Results = (props) => {
    const onResetHandler = () => {
        props.onReset();
    };
    return (
        <div className="results">
            <Result label="Tip Amount" amount={props.tipPerPerson}></Result>
            <Result label="Total" amount={props.totalPerPerson}></Result>
            <Reset onReset={onResetHandler} disabled={props.disabled} />
        </div>
    );
};

export default Results;
