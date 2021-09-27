import cs from "./Deals.module.css";
import Sidebar from "../../components/Sidebar";
import Searchbar from "../../components/Searchbar";
import TasksHeader from "../Tasks/TasksHeader/TasksHeader";
import ButtonDefault from "../../components/ButtonDefault";

import arrowIcon from "../../assets/img/icons/arrow.svg";
import nicciTroiani from "../../assets/img/users/nicciTraioni.jpg";
import georgeFields from "../../assets/img/users/georgeFields.jpg";

function Deals() {
    return (


        <div className={cs["container"]}>

            <Searchbar />

            <Sidebar />

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

                    <ButtonDefault></ButtonDefault>

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
                        <div className={cs["card-details"]}>
                            <div className={cs["card-details-title"]}>
                                <p className={cs["card-details-title_text"]}>Freshdesk</p>
                            </div>
                            <div className={cs["card-details-date"]}>
                                <p className={cs["card-details-date_text"]}>Close date:</p>
                                <p className={cs["card-details-date_date"]}>December 22, 2018</p>
                            </div>
                            <div className={cs["card-details-user"]}>
                                <div className={cs["card-details-user_wrapper"]}>
                                    <img src={nicciTroiani} alt="Nicci Traioni" />
                                    <p className={cs["card-details-user_name"]}>Nicci Troiani</p>
                                </div>
                                <span>$ 120</span>
                            </div>
                        </div>
                    </div>
                    <div className={cs["grid-deals_card_2"]}>
                        <div className={cs["card-details"]}>
                            <div className={cs["card-details-title"]}>
                                <p className={cs["card-details-title_text"]}>Skype</p>
                            </div>
                            <div className={cs["card-details-date"]}>
                                <p className={cs["card-details-date_text"]}>Close date:</p>
                                <p className={cs["card-details-date_date"]}>December 18, 2018</p>
                            </div>
                            <div className={cs["card-details-user"]}>
                                <div className={cs["card-details-user_wrapper"]}>
                                    <img src={georgeFields} alt="George Fields" />
                                    <p className={cs["card-details-user_name"]}>George Fields</p>
                                </div>
                                <span>$ 50</span>
                            </div>
                        </div>
                    </div>

                    <div className={cs["grid-deals_card_3"]}>CARD3</div>
                    <div className={cs["grid-deals_card_4"]}>CARD4</div>
                    <div className={cs["grid-deals_card_5"]}>CARD5</div>
                    <div className={cs["grid-deals_card_6"]}>CARD6</div>
                    <div className={cs["grid-deals_card_7"]}>CARD7</div>
                    <div className={cs["grid-deals_card_8"]}>CARD8</div>
                </div>



            </div>

        </div>
    );
}

export default Deals;