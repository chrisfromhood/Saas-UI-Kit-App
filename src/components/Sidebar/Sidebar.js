/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import cs from "./Sidebar.module.css";

import sierraFerguson from "../../assets/img/users/sierraFerguson.jpg";
import dashboardIcon from "../../assets/img/icons/dashboardicon.svg";
import tasksIcon from "../../assets/img/icons/tasks.svg";
import emailIcon from "../../assets/img/icons/emailicon.svg";
import contactsIcon from "../../assets/img/icons/contactsicon.svg";
import chatIcon from "../../assets/img/icons/chaticon.svg";
import dealsIcon from "../../assets/img/icons/dealsicon.svg";
import settingsIcon from "../../assets/img/icons/settingsicon.svg";
import toggleIcon from "../../assets/img/icons/toggle.svg";
// STATUS ICON
import activeIcon from "../../assets/img/circle/active_circle.svg";
import completedIcon from "../../assets/img/circle/completed_circle.svg";
import endedIcon from "../../assets/img/circle/ended_circle.svg";


function Sidebar() {
    return (


        <div className={cs["sidebar"]}>
            <div className={cs["side-logo"]}>
                <span>SaaS Kit</span>
            </div>

            <div className={cs["user-details"]}>
                <div className={cs["user-details-photo_wrapper"]}>
                    <img src={sierraFerguson} alt="User" className={cs["user-details_photo"]} />
                </div>
                <div className={cs["user-details_text"]}>
                    <p className={cs["user-details_name"]}>Sierra Ferguson</p>
                    <p className={cs["user-details_mail"]}>s.ferguson@gmail.com</p>
                </div>
            </div>

            <nav className={cs["side-options"]}>
                <div className={cs["side-option_item"]}>
                    <img src={dashboardIcon} alt="Dashboard Icon" className={cs["option_item_icon"]} />
                    <span>Dashboard</span>
                </div>

                <div className={`${cs["side-option_item"]} ${cs["side-option_selected"]}`}>
                    <img src={tasksIcon} alt="Tasks Icon" />
                    <a href="#">Tasks</a>

                    <div className={cs["side-status"]}>
                        <div className={cs["side-status_item"]}>
                            <img src={activeIcon} alt="Active Status Icon" />
                            <a href="#">Active</a>
                        </div>
                        <div className={cs["side-status_item"]}>
                            <img src={completedIcon} alt="Completed Status Icon" />
                            <a href="#">Completed</a>
                        </div>
                        <div className={cs["side-status_item"]}>
                            <img src={endedIcon} alt="Ended Status Icon" />
                            <a href="#">Ended</a>
                        </div>
                    </div>
                </div>

                <div className={cs["side-option_item"]}>
                    <img src={emailIcon} alt="Email Icon" />
                    <span>Email</span>
                </div>

                <div className={cs["side-option_item"]}>
                    <img src={contactsIcon} alt="Contacts Icon" />
                    <span>Contacts</span>
                </div>

                <div className={cs["side-option_item"]}>
                    <img src={chatIcon} alt="Chat Icon" />
                    <span>Chat</span>
                </div>

                <div className={cs["side-option_item"]}>
                    <img src={dealsIcon} alt="Deals Icon" />
                    <span>Deals</span>
                </div>
            </nav>{/*!--- .side-options ---  */}

            <div className={cs["side-option_settings"]}>
                <img src={settingsIcon} alt="Settings Icon" />
                <span>Settings</span>
            </div>
            <div className={cs["side-option_toggle"]}>
                <img src={toggleIcon} alt="Toggle Sidebar Icon" />
                <span>Toggle sidebar</span>
            </div>
        </div>

    );
}

export default Sidebar;