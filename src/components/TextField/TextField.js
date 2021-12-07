import cs from "./TextField.module.css";

function TextField({ fieldName, userValue }) {
  return (

    <div className={cs["text-field"]}>
      <span className={cs["field-name"]}>{fieldName}</span>
      <span className={cs["user-value"]}>{userValue}</span>
    </div>

  );
}
export default TextField;