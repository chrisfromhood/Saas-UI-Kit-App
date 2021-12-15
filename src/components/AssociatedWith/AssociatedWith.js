import cs from "./AssociatedWith.module.css";

function AssociatedWith({ title, userLogo, userName, children }) {
  return (
    <div className={cs["textfield"]}>
      <label>{title}</label>
      <div className={cs["second-row_wrapper"]}>
        <div className={cs["user_wrapper"]}>
          <img src={userLogo} alt="User avatar" className={cs["user_avatar"]} />
          <span>{userName}</span>
        </div>
        <div className={cs["select-option_wrapper"]}>{children}</div>
      </div>
    </div>
  );
}

export default AssociatedWith;