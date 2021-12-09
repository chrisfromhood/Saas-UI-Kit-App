import cs from "./ContactsDelete.module.css";

function ContactsDelete() {
  return (
    <div className={cs["Contact-delete-box"]}>
      <h1>Are you sure you want to delete this contact?</h1>
      <div className={cs["btns-wrapper"]}>
        <button className={`${cs["btn"]} ${cs["no"]}`}>No</button>
        <button className={`${cs["btn"]} ${cs["yes"]}`}>Yes</button>
      </div>
    </div>

  );
}
export default ContactsDelete;