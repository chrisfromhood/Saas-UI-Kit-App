import cs from "./EmailAddressRow.module.css";


function EmailAddressRow({ email }) {
  return (

    <div className={cs["email-address_row"]}>{email}</div>

  );
}
export default EmailAddressRow;