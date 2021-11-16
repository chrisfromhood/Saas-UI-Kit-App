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

            {/*!--- .side-options ---  */}
            <div className={cs["side-options"]}>

                <li className={cs["side-options_item"]}>
                    <a className={cs["side-options_btn"]} href="#dashboard">
                        <img src={dashboardIcon} alt="Dashboard Icon" className={cs["side-options_icon"]} />
                        Dashboard</a>
                </li>

                <li className={cs["side-options_item"]} id="tasks" href="http://localhost:3000/Tasks#tasks">
                    <a className={cs["side-options_btn"]} href="#tasks">
                        <img src={tasksIcon} alt="Tasks Icon" className={cs["side-options_icon"]} />
                        Tasks</a>

                    <div className={cs["side-status"]}>
                        <a href="/" className={cs["side-status_item"]}>
                            <div className={`${cs["side-status_icon"]} ${cs["yellow_circle"]}`}></div>
                            Active
                        </a>

                        <a href="/" className={cs["side-status_item"]}>
                            <div className={`${cs["side-status_icon"]} ${cs["green_circle"]}`}></div>
                            Completed
                        </a>

                        <a href="/" className={cs["side-status_item"]}>
                            <div className={`${cs["side-status_icon"]} ${cs["red_circle"]}`}></div>
                            Ended
                        </a>

                    </div>
                </li>

                <li className={cs["side-options_item"]} id="emails">
                    <a className={cs["side-options_btn"]} href="#emails">
                        <img src={emailIcon} alt="Email Icon" className={cs["side-options_icon"]} />
                        Email</a>

                    <div className={cs["side-status"]}>
                        <a href="/" className={cs["side-status_item"]}>
                            <div className={`${cs["side-status_icon"]} ${cs["yellow_circle"]}`}></div>
                            Draft
                        </a>

                        <a href="/" className={cs["side-status_item"]}>
                            <div className={`${cs["side-status_icon"]} ${cs["purple_circle"]}`}></div>
                            Scheduled
                        </a>

                        <a href="/" className={cs["side-status_item"]}>
                            <div className={`${cs["side-status_icon"]} ${cs["green_circle"]}`}></div>
                            Sent
                        </a>

                        <a href="/" className={cs["side-status_item"]}>
                            <div className={`${cs["side-status_icon"]} ${cs["red_circle"]}`}></div>
                            Archived
                        </a>

                    </div>
                </li>



                <li className={cs["side-options_item"]}>
                    <a className={cs["side-options_btn"]} href="#contacts">
                        <img src={contactsIcon} alt="Contacts Icon" className={cs["side-options_icon"]} />
                        Contacts</a>
                </li>

                <li className={cs["side-options_item"]}>
                    <a className={cs["side-options_btn"]} href="#chat">
                        <img src={chatIcon} alt="Chat Icon" className={cs["side-options_icon"]} />
                        Chat</a>
                </li>

                <li className={cs["side-options_item"]} id="deals">
                    <a className={cs["side-options_btn"]} href="#deals">
                        <img src={dealsIcon} alt="Deals Icon" className={cs["side-options_icon"]} />
                        Deals</a>

                    <div className={cs["side-status"]}>
                        <a href="/" className={cs["side-status_item"]}>
                            <div className={`${cs["side-status_icon"]} ${cs["yellow_circle"]}`}></div>
                            Active
                        </a>

                        <a href="/" className={cs["side-status_item"]}>
                            <div className={`${cs["side-status_icon"]} ${cs["green_circle"]}`}></div>
                            Completed
                        </a>

                        <a href="/" className={cs["side-status_item"]}>
                            <div className={`${cs["side-status_icon"]} ${cs["red_circle"]}`}></div>
                            Ended
                        </a>

                    </div>
                </li>
            </div>{/*!--- .side-options ---  */}

            <div className={cs["side-option_settings"]}>
                <img src={settingsIcon} alt="Settings Icon" />
                <a href="/">Settings</a>
            </div>
            <div className={cs["side-option_toggle"]}>
                <img src={toggleIcon} alt="Toggle Sidebar Icon" />
                <span>Toggle sidebar</span>
            </div>
        </div>

    );
}

export default Sidebar;