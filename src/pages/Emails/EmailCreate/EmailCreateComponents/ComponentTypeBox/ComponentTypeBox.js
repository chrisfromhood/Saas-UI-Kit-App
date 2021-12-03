import cs from "./ComponentTypeBox.module.css";

function ComponentTypeBox({ icon, name }) {
  return (

    <div className={cs["component-type-box_wrapper"]}>
      <div className={cs["type-box"]}>
        <img src={icon} alt="Type Icon" className={cs["type_icon"]} />
      </div>
      <span className={cs["name"]}>{name}</span>
    </div>

  );
}
export default ComponentTypeBox;