import cs from "./TagsContent.module.css";

import EditIcon from "../../../../assets/img/icons/edit-icon.svg";
import DelIcon from "../../../../assets/img/icons/baseline-delete.svg";

function TagsContent() {
    return (

        <div className={cs["row-wrapper"]}>
            {/* TASKS */}
            <div className={cs["row"]}>

                <div className={cs["row_wrapper"]}>
                    <div className={cs["row-header"]}>
                        <div className={cs["row-h3_left"]}>Tasks</div>
                        <div className={cs["row-h3_right"]}>3</div>
                    </div>
                    <div className={cs["row-tags_wrapper"]}>
                        <div className={cs["tag_wrapper"]}>
                            <div className={`${cs["tag"]} ${cs["yellow"]}`}>Active</div>
                            <div className={cs["tag-icons_wrapper"]}>
                                <img className={cs["tag_icon"]} src={EditIcon} alt="Edit Icon" />
                                <img className={cs["tag_icon"]} src={DelIcon} alt="Remove Icon" />
                            </div>
                        </div>

                        <div className={cs["tag_wrapper"]}>
                            <div className={`${cs["tag"]} ${cs["green"]}`}>Completed</div>
                            <div className={cs["tag-icons_wrapper"]}>
                                <img className={cs["tag_icon"]} src={EditIcon} alt="Edit Icon" />
                                <img className={cs["tag_icon"]} src={DelIcon} alt="Remove Icon" />
                            </div>
                        </div>

                        <div className={cs["tag_wrapper"]}>
                            <div className={`${cs["tag"]} ${cs["red"]}`}>Ended</div>
                            <div className={cs["tag-icons_wrapper"]}>
                                <img className={cs["tag_icon"]} src={EditIcon} alt="Edit Icon" />
                                <img className={cs["tag_icon"]} src={DelIcon} alt="Remove Icon" />
                            </div>
                        </div>

                    </div>



                </div>


            </div>
            {/* CONTACTS */}
            <div className={cs["row"]}>

                <div className={cs["row_wrapper"]}>
                    <div className={cs["row-header"]}>
                        <div className={cs["row-h3_left"]}>Contacts</div>
                        <div className={cs["row-h3_right"]}>3</div>
                    </div>
                    <div className={cs["row-tags_wrapper"]}>
                        <div className={cs["tag_wrapper"]}>
                            <div className={`${cs["tag"]} ${cs["green"]}`}>New</div>
                            <div className={cs["tag-icons_wrapper"]}>
                                <img className={cs["tag_icon"]} src={EditIcon} alt="Edit Icon" />
                                <img className={cs["tag_icon"]} src={DelIcon} alt="Remove Icon" />
                            </div>
                        </div>

                        <div className={cs["tag_wrapper"]}>
                            <div className={`${cs["tag"]} ${cs["yellow"]}`}>Top rated</div>
                            <div className={cs["tag-icons_wrapper"]}>
                                <img className={cs["tag_icon"]} src={EditIcon} alt="Edit Icon" />
                                <img className={cs["tag_icon"]} src={DelIcon} alt="Remove Icon" />
                            </div>
                        </div>

                        <div className={cs["tag_wrapper"]}>
                            <div className={`${cs["tag"]} ${cs["red"]}`}>Fired</div>
                            <div className={cs["tag-icons_wrapper"]}>
                                <img className={cs["tag_icon"]} src={EditIcon} alt="Edit Icon" />
                                <img className={cs["tag_icon"]} src={DelIcon} alt="Remove Icon" />
                            </div>
                        </div>

                    </div>



                </div>


            </div>
            {/* DEALS */}
            <div className={cs["row"]}>

                <div className={cs["row_wrapper"]}>
                    <div className={cs["row-header"]}>
                        <div className={cs["row-h3_left"]}>Deals</div>
                        <div className={cs["row-h3_right"]}>3</div>
                    </div>
                    <div className={cs["row-tags_wrapper"]}>
                        <div className={cs["tag_wrapper"]}>
                            <div className={`${cs["tag"]} ${cs["yellow"]}`}>Low</div>
                            <div className={cs["tag-icons_wrapper"]}>
                                <img className={cs["tag_icon"]} src={EditIcon} alt="Edit Icon" />
                                <img className={cs["tag_icon"]} src={DelIcon} alt="Remove Icon" />
                            </div>
                        </div>

                        <div className={cs["tag_wrapper"]}>
                            <div className={`${cs["tag"]} ${cs["green"]}`}>High</div>
                            <div className={cs["tag-icons_wrapper"]}>
                                <img className={cs["tag_icon"]} src={EditIcon} alt="Edit Icon" />
                                <img className={cs["tag_icon"]} src={DelIcon} alt="Remove Icon" />
                            </div>
                        </div>

                        <div className={cs["tag_wrapper"]}>
                            <div className={`${cs["tag"]} ${cs["red"]}`}>Urgent</div>
                            <div className={cs["tag-icons_wrapper"]}>
                                <img className={cs["tag_icon"]} src={EditIcon} alt="Edit Icon" />
                                <img className={cs["tag_icon"]} src={DelIcon} alt="Remove Icon" />
                            </div>
                        </div>

                    </div>



                </div>


            </div>






        </div >

    );
}
export default TagsContent;