import cs from "./StatusCircle.module.css";

function StatusCircle({ green = false, red = false, yellow = false, purple = false, w12 = false, w16 = false }) {
  return (

    <div className={`${cs["side-status_icon"]} 
    ${green ? cs["green"] : ""}
    ${yellow ? cs["yellow"] : ""}
    ${red ? cs["red"] : ""}
    ${purple ? cs["purple"] : ""}
    ${w12 ? cs["w12"] : ""}
    ${w16 ? cs["w16"] : ""}
    `}
    >
    </div>

  );
}

export default StatusCircle;