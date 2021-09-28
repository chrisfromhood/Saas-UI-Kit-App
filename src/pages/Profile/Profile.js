import cs from "./Profile.module.css";
import Sidebar from "../../components/Sidebar";
import Searchbar from "../../components/Searchbar";
import avatar from "../../assets/img/users/Avatar.png";

function Profile() {
    return (


        <div className={cs["container"]}>

            <Searchbar />

            <Sidebar />

            <div className={cs["content"]}>
                <div className={cs["profile"]}>
                    <div className={cs["avatar"]}>
                        <img src={avatar} alt="User avatar profile" />
                        <p>Super admin</p>
                    </div>
                    <div className={cs["informations"]}>INFORMATIONS</div>
                    <div className={cs["change password"]}>CHANCHE PASSWORD</div>
                </div>

            </div>
        </div>
    );
}

export default Profile;