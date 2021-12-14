import cs from "./SideOptionItem.module.css";

function SideOptionItem({ icon, title }) {
  return (

    <div className={cs["side-option-item"]}>
      <li className={cs["side-options_item"]}>
        <a className={cs["side-options_btn"]} href="#dashboard">
          <img src={icon} alt="Dashboard Icon" className={cs["side-options_icon"]} />
          {title}</a>
      </li>
    </div>

  )
}

export default SideOptionItem;
