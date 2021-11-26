import cs from "./EmailsFeature.module.css";

function EmailsFeature({ feature, icon }) {
  return (

    <div className={cs["email-feature"]}>
      <span>{feature}</span>
      <img src={icon} alt="Feature Icon" />
    </div>

  )
}

export default EmailsFeature;
