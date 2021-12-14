import cs from "./Chat.module.css";
import AppPage from "../../components/AppPage/AppPage";
import ChatMsgBox from "./ChatMsgBox/ChatMsgBox";
import ChatWindow from "./ChatWindow/ChatWindow";



function Chat() {
  return (
    <AppPage>
      <div className={cs["container"]}>
        <ChatMsgBox />
        <ChatWindow />
      </div>

    </AppPage>
  );
}
export default Chat;