import classes from "../css/Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      className="bg-Marine-blue px-2 py-2 rounded-[5px] text-White font-bold w-[6rem] ml-auto"
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
