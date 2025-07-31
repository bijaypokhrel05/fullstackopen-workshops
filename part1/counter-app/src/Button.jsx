import "./Button.css";

const Button = ({ onClickFunc, operation }) => {
    return <button onClick={onClickFunc}>{operation}</button>
};

export default Button;