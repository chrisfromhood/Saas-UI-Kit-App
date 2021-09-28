import cs from "./Profile.module.css";
import Sidebar from "../../components/Sidebar";
import Searchbar from "../../components/Searchbar";
import avatar from "../../assets/img/users/Avatar.png";
import ButtonDefault from "../../components/ButtonDefault";

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
                    <div className={cs["details"]}>
                        <div className={cs["basic-informations"]}>
                            <h3>Basic information</h3>
                            <div className={cs["name"]}>
                                <span>First name</span>
                                <p>Sierra</p>
                            </div>
                            <div className={cs["last-name"]}>
                                <span>Last name</span>
                                <p>Ferguson</p>
                            </div>
                            <div className={cs["email"]}>
                                <span>Email</span>
                                <p>s.ferguson@gmail.com</p>
                            </div>
                            <div className={cs["phone-number"]}>
                                <span>Phone number</span>
                                <p>+1 541 754 3010</p>
                            </div>
                        </div>
                        <div className={cs["additional-informations"]}>
                            <h3>Additional information</h3>
                            <div className={cs["city"]}>
                                <span>City</span>
                                <p>Scranton</p>
                            </div>
                            <div className={cs["state"]}>
                                <span>State</span>
                                <p>Pennsylvania</p>
                            </div>
                            <div className={cs["country"]}>
                                <span>Country</span>
                                <p>United States</p>
                            </div>
                        </div>
                        <div className={cs["job-informations"]}>
                            <h3>Job</h3>
                            <div className={cs["job"]}>
                                <span>Company</span>
                                <p>SaaS Design Team</p>
                            </div>
                        </div>
                    </div>
                    <div className={cs["change-password"]}>
                        <h3>Change password</h3>
                        <div className={cs["enter-previous"]}>
                            <input className={cs["password"]} type="text" placeholder="Enter previous password"></input>
                        </div>
                        <div className={cs["new"]}>
                            <input className={cs["password"]} type="text" placeholder="New password"></input>
                        </div>
                        <div className={cs["confirm-new"]}>
                            <input className={cs["password"]} type="text" placeholder="Confirm new password"></input>
                        </div>
                        <ButtonDefault />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Profile;