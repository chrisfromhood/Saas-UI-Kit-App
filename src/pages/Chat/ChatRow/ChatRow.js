import cs from "./ChatRow.module.css";

function ChatRow({ userLogo, userName, lastActive, children }) {
  return (


    <div className={cs["chat-row"]}>
      <div className={cs["top-row"]}>
        <div className={cs["user-img"]}>
          <img src={userLogo} alt="User Icon" className={cs["user_icon"]} />
        </div>
        <span className={cs["user-name"]}>{userName}</span>
        <div className={cs["user-last-active"]}>{lastActive}</div>
      </div>
      <div className={cs["bottom-row"]}>
        <div>{children}</div>
        {/* <span className={cs["message"]}>{message}</span>
        <span className={cs["typing"]}>{typing}</span>
        <div className={cs["row-you"]}><span>{you}</span>{youText}</div> */}
      </div>

    </div>


  );
}

export default ChatRow;