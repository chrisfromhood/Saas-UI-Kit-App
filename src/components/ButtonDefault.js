import cs from "./ButtonDefault.module.css";

function ButtonDefault() {
    return (


        <div className={cs["btn-wrapper"]}>
            <button className={cs["btn-default"]}> Create task</button>
        </div>


    );
}

export default ButtonDefault;