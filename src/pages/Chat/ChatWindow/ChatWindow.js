import cs from "./ChatWindow.module.css";
import dots from "../../../assets/img/sign/3dots.svg";
import smiley from "../../../assets/img/sign/smiley.svg";
import attachment from "../../../assets/img/sign/attachment.svg";
import lin from "../../../assets/img/users/lindseyStroud.jpg";
import you from "../../../assets/img/users/you.jpg";


function ChatWindow({ }) {
  return (


    <div className={cs["chat-window"]}>
      <div className={cs["top-header"]}>
        <div className={cs["top-left"]}>
          <div className={cs["user_wrapper"]}>
            <img src={lin} alt="User Icon" className={cs["user_icon"]} />
            <h3>Lindsey Stroud</h3>
            <div className={cs["online-dot"]}></div>
          </div>
        </div>
        <div className={cs["top-right"]}>
          <img src={dots} alt="User Icon" />
        </div>
      </div>
      <div className={cs["main-content"]}>

        <div className={cs["chat-right-small"]}>
          <div className={cs["small-user_wrapper"]}>
            <img src={you} alt="User Icon" className={cs["user_small"]} />
            <div className={cs["user"]}>You</div>
            <div className={cs["time"]}>11:20</div>
          </div>
          <div className={cs["chat-bubble_white"]}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consecteturg.</p>
          </div>
        </div>

        <div className={cs["chat-left-small"]}>
          <div className={cs["small-user_wrapper"]}>
            <img src={lin} alt="User Icon" className={cs["user_small"]} />
            <div className={cs["user"]}>Lindsey Stroud</div>
            <div className={cs["time"]}>11:12</div>
          </div>
          <div className={cs["chat-bubble_blue"]}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus mattis molestie. Ligula ullamcorper malesuada proin libero nunc consequat interdum. A lacus vestibulum sed arcu non odio euismod lacinia. Aliquet eget sit amet tellus cras adipiscing enim.</p>
          </div>
        </div>

        <div className={cs["chat-right-small"]}>
          <div className={cs["small-user_wrapper"]}>
            <img src={you} alt="User Icon" className={cs["user_small"]} />
            <div className={cs["user"]}>You</div>
            <div className={cs["time"]}>11:20</div>
          </div>
          <div className={cs["chat-bubble_white"]}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consecteturg.</p>
          </div>
        </div>

        <div className={cs["chat-left-small"]}>
          <div className={cs["small-user_wrapper"]}>
            <img src={lin} alt="User Icon" className={cs["user_small"]} />
            <div className={cs["user"]}>Lindsey Stroud</div>
            <div className={cs["time"]}>11:12</div>
          </div>
          <div className={cs["chat-bubble_blue"]}>
            <p>Your idea for this application is nice! </p>
          </div>
        </div>
        <div className={`${cs["chat-left-small"]} ${cs["mb-small"]}`}>
          <div className={cs["small-user_wrapper"]}>
            <img src={lin} alt="User Icon" className={cs["user_small"]} />
            <div className={cs["user"]}>Lindsey Stroud</div>
            <div className={cs["typing"]}>Typing a message...</div>
          </div>
        </div>

      </div>

      <div className={cs["bottom-footer"]}>
        <div className={cs["type-msg-field"]}>Type a message...</div>
        <div className={cs["icons_wrapper"]}>
          <img src={attachment} alt="Smileys Icon" className={cs["icon"]} />
          <img src={smiley} alt="Attacment Icon" className={cs["icon"]} />
        </div>

      </div>

    </div >


  );
}

export default ChatWindow;