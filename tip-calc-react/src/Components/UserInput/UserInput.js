//styles
import "./UserInput.scss";

//images
import dollarIcon from "../../images/icon-dollar.svg";
import personIcon from "../../images/icon-person.svg";
import FieldContainer from "../Shared/FieldContainer";
import TipSelection from "./TipSelection/TipSelection";

const UserInput = (props) => {
    const onTipChangedHandler = (tip) => {
        props.onTipChanged(tip);
    };

    const onChangeBillHandler = (amount) => {
        props.onChangeBill(amount);
    };

    const onChangePaxHandler = (pax) => {
        props.onChangePax(pax);
    };

    return (
        <div className="user-input">
            <FieldContainer
                id="billAmount"
                label="Bill"
                error="Can't be zero"
                iconSrc={dollarIcon}
                iconClasses="icon dollar"
                iconAlt="dollar-icon"
                inputType="number"
                placeholder="0"
                onChangeHandler={onChangeBillHandler}
                value={props.billAmount}
                reset={props.reset}
            />
            <TipSelection
                onTipChanged={onTipChangedHandler}
                reset={props.reset}
            />

            <FieldContainer
                id="pax"
                label="Number of People"
                error="Can't be zero"
                iconSrc={personIcon}
                iconClasses="icon person"
                iconAlt="person-icon"
                inputType="number"
                placeholder="0"
                onChangeHandler={onChangePaxHandler}
                value={props.paxAmount}
                reset={props.reset}
            />
        </div>
    );
};

export default UserInput;
