import cs from "./SortFeature.module.css";
import arrowIcon from "../../assets/img/icons/arrow.svg";

function SortFeature({ title, all }) {
  return (

    <div className={cs["sort-feature_view"]}>
      <p>
        {title}:<span>{all}</span>
        <img src={arrowIcon} alt="Arrow Down Icon" />
      </p>
    </div>

  )
}

export default SortFeature;
