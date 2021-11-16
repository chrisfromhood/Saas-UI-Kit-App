import cs from "./Deals.module.css";
import AppPage from "../../components/AppPage/AppPage";
import TasksHeader from "../Tasks/TasksHeader/TasksHeader";
import Button from "../../components/Button/Button";

import arrowIcon from "../../assets/img/icons/arrow.svg";
import nicciTroiani from "../../assets/img/users/nicciTraioni.jpg";
import georgeFields from "../../assets/img/users/georgeFields.jpg";
import rebeccaMoore from "../../assets/img/users/rebbeccaMoore.jpg";
import janeDoe from "../../assets/img/users/janeDoe.jpg";
import franzFerdinand from "../../assets/img/users/franzFerdinand.jpg";

function Deals() {
    return (


        <AppPage>
            <div className={cs["content"]}>
                <TasksHeader>

                    <div className={cs["sort-feature_wrapper"]}>
                        <div className={cs["sort-feature_view"]}>
                            <p>
                                View:<span>All</span>
                                <img src={arrowIcon} alt="Arrow Down Icon" />
                            </p>
                        </div>

                    </div>

                    {/* <Button>Create deal</Button> */}
                    <button>
                        <a href="#">Create deal</a>
                    </button>

                </TasksHeader>

                <div className={cs["border-bottom"]}></div>

                <div className={cs["grid-deals_titles"]}>

                    <div className={cs["deals-details"]}>
                        <p className={cs["deals-title"]}>New sales deals</p>
                        <span className={cs["deals-count"]}>2</span>
                    </div>

                    <div className={cs["deals-details"]}>
                        <p className={cs["deals-title"]}>Won</p>
                        <span className={cs["deals-count"]}>5</span>
                    </div>

                    <div className={cs["deals-details"]}>
                        <p className={cs["deals-title"]}>Lost</p>
                        <span className={cs["deals-count"]}>1</span>
                    </div>
                </div>{/*!--- .deals-titles ---  */}

                <div className={cs["grid-deals_cards"]}>
                    <div className={cs["grid-deals_card_1"]}>
                        <div className={`${cs["card-details"]} ${cs["left-border_red"]}`}>
                            <div className={cs["card-details-title"]}>
                                <span className={cs["card-details-title_text"]}>Freshdesk</span>
                            </div>
                            <div className={cs["card-details-date"]}>
                                <span className={cs["card-details-date_text"]}>Close date: </span>
                                <span className={cs["card-details-date_date"]}>December 22, 2018</span>
                            </div>
                            <div className={cs["card-details-user"]}>
                                <div className={cs["card-details-user_wrapper"]}>
                                    <img src={nicciTroiani} alt="Nicci Traioni" />
                                    <span className={cs["card-details-user_name"]}>Nicci Troiani</span>
                                </div>
                                <span>$ 120</span>
                            </div>
                        </div>
                    </div>
                    <div className={cs["grid-deals_card_2"]}>
                        <div className={`${cs["card-details"]} ${cs["left-border_yellow"]}`}>
                            <div className={cs["card-details-title"]}>
                                <span className={cs["card-details-title_text"]}>Skype</span>
                            </div>
                            <div className={cs["card-details-date"]}>
                                <span className={cs["card-details-date_text"]}>Close date: </span>
                                <span className={cs["card-details-date_date"]}>December 18, 2018</span>
                            </div>
                            <div className={cs["card-details-user"]}>
                                <div className={cs["card-details-user_wrapper"]}>
                                    <img src={georgeFields} alt="George Fields" />
                                    <span className={cs["card-details-user_name"]}>George Fields</span>
                                </div>
                                <span>$ 50</span>
                            </div>
                        </div>
                    </div>

                    <div className={cs["grid-deals_card_3"]}>
                        <div className={`${cs["card-details"]} ${cs["left-border_green"]}`}>
                            <div className={cs["card-details-title"]}>
                                <span className={cs["card-details-title_text"]}>Netflix</span>
                            </div>
                            <div className={cs["card-details-date"]}>
                                <span className={cs["card-details-date_text"]}>Close date: </span>
                                <span className={cs["card-details-date_date"]}>December 20, 2018</span>
                            </div>
                            <div className={cs["card-details-user"]}>
                                <div className={cs["card-details-user_wrapper"]}>
                                    <img src={rebeccaMoore} alt="Rebecca Moore" />
                                    <span className={cs["card-details-user_name"]}>Rebecca Moore</span>
                                </div>
                                <span>$ 15,000</span>
                            </div>
                        </div>
                    </div>
                    <div className={cs["grid-deals_card_4"]}>
                        <div className={`${cs["card-details"]} ${cs["left-border_yellow"]}`}>
                            <div className={cs["card-details-title"]}>
                                <span className={cs["card-details-title_text"]}>Clockify</span>
                            </div>
                            <div className={cs["card-details-date"]}>
                                <span className={cs["card-details-date_text"]}>Close date: </span>
                                <span className={cs["card-details-date_date"]}> December 16, 2018</span>
                            </div>
                            <div className={cs["card-details-user"]}>
                                <div className={cs["card-details-user_wrapper"]}>
                                    <img src={janeDoe} alt="George Fields" />
                                    <span className={cs["card-details-user_name"]}>Jane Doe</span>
                                </div>
                                <span>$ 1,000</span>
                            </div>
                        </div>
                    </div>
                    <div className={cs["grid-deals_card_5"]}>
                        <div className={`${cs["card-details"]} ${cs["left-border_yellow"]}`}>
                            <div className={cs["card-details-title"]}>
                                <span className={cs["card-details-title_text"]}>Google</span>
                            </div>
                            <div className={cs["card-details-date"]}>
                                <span className={cs["card-details-date_text"]}>Close date: </span>
                                <span className={cs["card-details-date_date"]}>December 14, 2018</span>
                            </div>
                            <div className={cs["card-details-user"]}>
                                <div className={cs["card-details-user_wrapper"]}>
                                    <img src={nicciTroiani} alt="Nicci Traioni" />
                                    <span className={cs["card-details-user_name"]}>Nicci Traioni</span>
                                </div>
                                <span>$ 960</span>
                            </div>
                        </div>
                    </div>
                    <div className={cs["grid-deals_card_6"]}>
                        <div className={`${cs["card-details"]} ${cs["left-border_green"]}`}>
                            <div className={cs["card-details-title"]}>
                                <span className={cs["card-details-title_text"]}>Instagram</span>
                            </div>
                            <div className={cs["card-details-date"]}>
                                <span className={cs["card-details-date_text"]}>Close date: </span>
                                <span className={cs["card-details-date_date"]}>December 14, 2018</span>
                            </div>
                            <div className={cs["card-details-user"]}>
                                <div className={cs["card-details-user_wrapper"]}>
                                    <img src={georgeFields} alt="George Fields" />
                                    <span className={cs["card-details-user_name"]}>George Fields</span>
                                </div>
                                <span>$ 3,500</span>
                            </div>
                        </div>
                    </div>
                    <div className={cs["grid-deals_card_7"]}>
                        <div className={`${cs["card-details"]} ${cs["left-border_red"]}`}>
                            <div className={cs["card-details-title"]}>
                                <span className={cs["card-details-title_text"]}>Slack</span>
                            </div>
                            <div className={cs["card-details-date"]}>
                                <span className={cs["card-details-date_text"]}>Close date: </span>
                                <span className={cs["card-details-date_date"]}>December 18, 2018</span>
                            </div>
                            <div className={cs["card-details-user"]}>
                                <div className={cs["card-details-user_wrapper"]}>
                                    <img src={georgeFields} alt="George Fields" />
                                    <span className={cs["card-details-user_name"]}>George Fields</span>
                                </div>
                                <span>$ 50</span>
                            </div>
                        </div>
                    </div>
                    <div className={cs["grid-deals_card_8"]}>
                        <div className={`${cs["card-details"]} ${cs["left-border_red"]}`}>
                            <div className={cs["card-details-title"]}>
                                <span className={cs["card-details-title_text"]}>BBC</span>
                            </div>
                            <div className={cs["card-details-date"]}>
                                <span className={cs["card-details-date_text"]}>Close date: </span>
                                <span className={cs["card-details-date_date"]}>December 19, 2018</span>
                            </div>
                            <div className={cs["card-details-user"]}>
                                <div className={cs["card-details-user_wrapper"]}>
                                    <img src={franzFerdinand} alt="Franz Ferdinand" />
                                    <span className={cs["card-details-user_name"]}>Franz Ferdinand</span>
                                </div>
                                <span>$ 1,200</span>
                            </div>
                        </div>
                    </div>
                </div>{/*!--- .deals-cards ---  */}

                <div className={cs["footer"]}>
                    <div>
                        <span>Total: $170</span>
                    </div>
                    <div>
                        <span>Total: $21,660</span>
                    </div>
                    <div>
                        <span>Total: $1,200</span>
                    </div>

                </div>
            </div>

        </AppPage>

    );
}

export default Deals;