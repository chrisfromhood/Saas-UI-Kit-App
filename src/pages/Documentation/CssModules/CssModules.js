import cs from "./CssModules.module.css";

function CssModules({ className, green = false }) {
  return (
    <div className={`${className} ${cs["container"]}`}>
      <div className={cs["bg-red"]}>RED</div>
      <div className={cs["bg-blue"]}>BLUE</div>
      <div className="bg-orange">ORANGE</div>
      <div className="bg-yellow">YELLOW</div>
      <div className={`${green ? cs["bg-green"] : ""}`}>
        <strong>green</strong> (boolean prop):
        {green.toString()}
      </div>
      <div><strong>cs</strong> (classes object): {JSON.stringify(cs)}</div>
    </div>
  );
}
export default CssModules;