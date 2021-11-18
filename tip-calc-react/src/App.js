//styles
import "./styles/App.scss";

//Components
import Header from "./Components/Layout/Header";
import Container from "./Components/Layout/Container";
import Content from "./Components/Layout/Content";
import Footer from "./Components/Layout/Footer";
import UserInput from "./Components/UserInput/UserInput";
import Results from "./Components/Results/Results";
import { useState } from "react";

const App = () => {
    const [enteredTip, setEnteredTip] = useState("");
    const [enteredBill, setEnteredBill] = useState("");
    const [enteredPax, setEnteredPax] = useState("");
    const [calcTotal, setCalcTotal] = useState(Number(0).toFixed(2));
    const [calcTip, setCalcTip] = useState(Number(0).toFixed(2));
    const [reset, setReset] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const onTipChangedHandler = (tip) => {
        setEnteredTip(tip);
        tryCalulateResults(enteredBill, tip, enteredPax);
    };

    const onChangeBillHandler = (amount) => {
        setEnteredBill(amount);
        tryCalulateResults(amount, enteredTip, enteredPax);
    };

    const onChangePaxHandler = (pax) => {
        setEnteredPax(pax);
        tryCalulateResults(enteredBill, enteredTip, pax);
    };

    const tryCalulateResults = (amount, tip, pax) => {
        const myAmount = Number(amount);
        const myTip = Number(tip);
        const myPax = Number(pax);

        setReset(false);

        if (myAmount === 0 || myPax === 0) {
            setCalcTip(Number(0).toFixed(2));
            setCalcTotal(Number(0).toFixed(2));
            return;
        }

        setDisabled(false);

        const totalTip = myAmount * (myTip / 100);
        const tipPerPerson = totalTip / pax;
        const totalPerPerson = (myAmount + totalTip) / myPax;

        setCalcTip(tipPerPerson.toFixed(2));
        setCalcTotal(totalPerPerson.toFixed(2));
    };

    const onResetHandler = () => {
        setEnteredTip("");
        setEnteredBill("");
        setEnteredPax("");
        setCalcTotal(Number(0).toFixed(2));
        setCalcTip(Number(0).toFixed(2));
        setReset(true);
        setDisabled(true);
    };

    return (
        <Container>
            <Header />
            <Content>
                <UserInput
                    onTipChanged={onTipChangedHandler}
                    onChangePax={onChangePaxHandler}
                    onChangeBill={onChangeBillHandler}
                    billAmount={enteredBill}
                    reset={reset}
                    paxAmount={enteredPax}
                />
                <Results
                    tipPerPerson={calcTip}
                    totalPerPerson={calcTotal}
                    onReset={onResetHandler}
                    disabled={disabled}
                />
            </Content>
            <Footer />
        </Container>
    );
};

export default App;
