import "./Button.css";

function Button(props) {
  return(
    <div className="button">
      <span className={props.btn_color}>{props.name}</span>
    </div>
  )
}
export default Button;