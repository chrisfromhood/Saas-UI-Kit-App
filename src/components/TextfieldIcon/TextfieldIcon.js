import cs from "./TextfieldIcon.module.css";

function TextfieldIcon({ title, option, children }) {
  return (
    <div className={cs["textfield"]}>
      <label>{title}</label>
      <div className={cs["select-option_wrapper"]}>
        <span>{option}</span>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default TextfieldIcon;