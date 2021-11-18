import cs from "./IntegrationCard.module.css";

// CARDS LOGOS
import deleteIcon from "../../../../assets/img/icons/baseline-delete.svg"



function IntegrationCard({ logo, title, description, connected }) {
  return (

    <div className={cs["your-integrations-card_wrapper"]}>
      <div className={cs["your-integrations-card"]}>
        <img className={cs["your-integr-logo"]} src={logo} alt="Slack logo" />
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={cs["your-integr-card_footer"]}>
          <span className={cs["your-integr-info_btn"]}>{connected ? "Connected" : "Connect"}</span>
          <img className={cs["delete-icon"]} src={deleteIcon} alt="Delete Icon" />
        </div>
      </div>
    </div>
  );
}


export default IntegrationCard;