import cs from "./ChatMsgBox.module.css";
import linsey from "../../../assets/img/users/lindseyStroud.jpg"
import nicci from "../../../assets/img/users/nicciTraioni.jpg"
import rebecca from "../../../assets/img/users/rebbeccaMoore.jpg"
import jane from "../../../assets/img/users/janeDoe.jpg"
import jones from "../../../assets/img/users/jones.jpg"
import martin from "../../../assets/img/users/martin.jpg"
import franz from "../../../assets/img/users/franzFerdinand.jpg"
import judith from "../../../assets/img/users/judith.jpg"
import john from "../../../assets/img/users/john.jpg"
import w from "../../../assets/img/users/w.svg"
import ChatRow from "../ChatRow/ChatRow";

function ChatMsgBox() {
  return (


    <div className={cs["chat-msg-box"]}>
      <ChatRow
        userLogo={linsey}
        userName="Lindsey Stroud"
        lastActive="30 Dec 2018, 12:34"
      />
      <ChatRow
        userLogo={nicci}
        userName="Nicci Troiani"
        lastActive="30 Dec 2018, 11:12"
      />
      <ChatRow
        userLogo={w}
        userName="WordPress conferesion"
        lastActive="29 Dec 2018, 18:05"
      />
      <ChatRow
        userLogo={rebecca}
        userName="Rebecca Moore"
        lastActive="29 Dec 2018, 18:05"
      />
      <ChatRow
        userLogo={jane}
        userName="Jane Doe"
        lastActive="29 Dec 2018, 16:45"
      />
      <ChatRow
        userLogo={jones}
        userName="Jones Dermot"
        lastActive="29 Dec 2018, 13:37"
      />
      <ChatRow
        userLogo={martin}
        userName="Martin Merces"
        lastActive="29 Dec 2018, 12:48"
      />
      <ChatRow
        userLogo={franz}
        userName="Franz Ferdinand"
        lastActive="28 Dec 2018, 15:27"
      />
      <ChatRow
        userLogo={judith}
        userName="Judith Williams"
        lastActive="28 Dec 2018, 13:19"
      />
      <ChatRow
        userLogo={john}
        userName="John Smith"
        lastActive="27 Dec 2018, 21:22"
      />

    </div>


  );
}

export default ChatMsgBox;