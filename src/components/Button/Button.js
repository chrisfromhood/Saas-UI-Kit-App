import cs from "./Button.module.css";

function Button({ children, ...other }) {
    return (


        <div className={cs["btn-wrapper"]}>
            <button className={`${cs["btn-default"]}`}>{children}</button>
        </div>


    );
}

export default Button;