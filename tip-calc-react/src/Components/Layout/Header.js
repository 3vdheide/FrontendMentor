//styles
import "./Header.scss";

//images
import logo from "../../images/logo.svg";
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="SPLITTER" />
        </div>
    );
};

export default Header;
