import cs from "./DealsFreshdesk.module.css";
import Button from "../../../components/Button/Button";
import closeIcon from "../../../assets/img/icons/close.svg";
import nicci from "../../../assets/img/users/nicciTraioni.jpg";
import add from "../../../assets/img/users/add.jpg";
import edit from "../../../assets/img/icons/edit-icon.svg";
import del from "../../../assets/img/icons/baseline-delete.svg";
import img from "../../../assets/img/deals/image-1.jpg";
import text from "../../../assets/img/contact/text.svg";
import insert from "../../../assets/img/contact/insert.svg";
import attach from "../../../assets/img/contact/attach.svg";


function DealsFreshdesk() {
  return (


    <div className={cs["freshdesk_box"]}>
      <div className={cs["box-heading"]}>
        <h1>Freshdesk</h1>
        <img src={closeIcon} alt="Close Icon" className={cs["close_icon"]} />
      </div>
      <section className={cs["section-top"]}>
        <div className={cs["row-info-left"]}>
          <div className={cs["row-info"]}><span>Column:</span> New sales deals
          </div>
          <div className={cs["row-info"]}><span>Close date:</span> December 22, 2018
          </div>
          <div className={cs["row-info"]}><span>Amount:</span> $ 120
          </div>
          <div className={`${cs["row-info"]} ${cs["align-center"]}`}>
            <span>Associated with:</span>
            <img src={nicci} alt="User Icon" className={cs["user_icon"]} />
            <img src={add} alt="User Icon" className={cs["user_icon"]} />
          </div>
        </div>
        <div className={cs["row-info-right"]}>
          <div className={cs["tag"]}>Urgent</div>
        </div>
      </section>
      <section className={cs["section-description"]}>
        <div className={cs["row-title"]}>
          <h3>Description</h3>
          <img src={edit} alt="Edit Icon" className={cs["small_icon"]} />
        </div>
        <p>Lorem ipsum dolor sit amet, ut per pertinax assueverit, dissentias honestatis usu an. Ei vim feugait aliquando, mei enim insolens ut. Usu quis enim evertitur an, eum nonumy ceteros laboramus te.</p>
      </section>

      <section className={cs["section-attachment"]}>
        <h3>Attachment</h3>
        <div className={cs["row-attachment"]}>
          <div className={cs["image_wrapper"]}>
            <img src={img} alt="Deals" className={cs["image"]} />
          </div>
          <div className={cs["text-icons_wrapper"]}>
            <div className={cs["attachment-text"]}>
              <h4>Name of the attachment</h4>
              <span>Added December 17, 2018</span>
            </div>
            <div className={cs["attachment-icons"]}>
              <img src={edit} alt="Edit Icon" className={cs["small_icon"]} />
              <img src={del} alt="Del Icon" className={cs["small_icon"]} />
            </div>
          </div>
        </div>
      </section>

      <section className={cs["section-leave-comment"]}>
        <h3>Leave a comment</h3>
        <div className={cs["fill-text_wrapper"]}>
          <p className={cs["fill-text"]}>Enter a comment.</p>
        </div>
        <div className={cs["footer-row"]}>
          <div className={cs["footer-left"]}>
            <div className={cs["icons-wrapper"]}>
              <img className={cs["icon"]} src={text} alt="Text icon" />
              <img className={cs["icon"]} src={insert} alt="Insert icon" />
              <img className={cs["icon"]} src={attach} alt="Attachment icon" />
            </div>
          </div>
          <div className={cs["footer-right"]}>
            <span className={cs["btn_tertiary"]}>Send</span>
          </div>
        </div>
      </section>
      <section className={cs["section-comments"]}>
        <h3>Comments</h3>
        <div className={cs["header-top"]}>
          <div className={cs["user_wrapper"]}>
            <img src={nicci} alt="User Icon" className={cs["user_icon"]} />
            <span>Nicci Troiani</span>
          </div>
          <div className={cs["date"]}>
            <span>10:15 AM, December 20, 2019</span>
          </div>
        </div>
        <div className={cs["fill-comment_wrapper"]}>
          <p className={cs["fill-comment"]}>Lorem ipsum dolor sit amet, ut per pertinax assueverit, dissentias honestatis usu an. Ei vim feugait aliquando, mei enim insolens ut.</p>
          <div className={cs["footer-row"]}>
            <div className={cs["footer-left"]}>
              <span className={cs["btn_tertiary"]}>Reply</span>
            </div>
            <div className={cs["footer-right"]}>
              <div className={cs["icons-wrapper"]}>
                <img src={edit} alt="Edit Icon" className={cs["small_icon"]} />
                <img src={del} alt="Del Icon" className={cs["small_icon"]} />
              </div>
            </div>
          </div>

        </div>


      </section>




    </div>

  );
}

export default DealsFreshdesk;