import cs from "./Button.module.css";

function Button() {
    return (


        <div className={cs["btn-wrapper"]}>
            <button className={cs["btn-default"]}> Create task</button>
        </div>


    );
}

export default Button;