import { Switch, Redirect, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Tasks from "./pages/Tasks/Tasks";
import Deals from "./pages/Deals/Deals";
import Emails from "./pages/Emails/Emails";
// import EmailsChecked from "./pages/Emails/EmailsChecked/EmailsChecked";
import Profile from "./pages/Profile/Profile";
import AccountSettings from "./pages/Settings/AccountSettings/AccountSettings";
import NotificationsSettings from "./pages/Settings/NotificationsSettings/NotificationsSettings";
import IntegrationsSettings from "./pages/Settings/IntegrationsSettings/IntegrationsSettings";
import ColleaguesSettings from "./pages/Settings/ColleaguesSettings/ColleaguesSettings";
import TagsSettings from "./pages/Settings/TagsSettings/TagsSettings";
import Documentation from "./pages/Documentation/Documentation";
import TableChecked from "./components/TableChecked/TableChecked";
import CreateTask from "./pages/Tasks/CreateTask/CreateTask";
import EmailsView from "./pages/Emails/EmailsView/EmailsView";
import EmailRecepients from "./pages/Emails/EmailsView/EmailRecepients/EmailRecepients";
import EmailsViewContent from "./pages/Emails/EmailsView/EmailsViewContent/EmailsViewContent";
import EmailCreateComponents from "./pages/Emails/EmailCreate/EmailCreateComponents/EmailCreateComponents";
import EmailCreateContent from "./pages/Emails/EmailCreate/EmailCreateContent/EmailCreateContent";
import EmailCreate from "./pages/Emails/EmailCreate/EmailCreate";
import Contacts from "./pages/Contacts/Contacts";
import ContactBox from "./pages/Contacts/ContactsDetails/ContactBox/ContactBox";
import ContactsRecentActivity from "./pages/Contacts/ContactsDetails/ContactsRecentActivity/ContactsRecentActivity";
import ContactsTab from "./pages/Contacts/ContactsDetails/ContactsTab/ContactsTab";
import ContactsDetails from "./pages/Contacts/ContactsDetails/ContactsDetails";
import TableCheckedItem from "./pages/Contacts/TableGrid/TableCheckedItem/TableCheckedItem";
import ContactBoxCreate from "./pages/Contacts/ContactsCreate/ContactBoxCreate/ContactBoxCreate";
import ContactsCreate from "./pages/Contacts/ContactsCreate/ContactsCreate";
import ContactsDelete from "./pages/Contacts/ContactsDelete/ContactsDelete";
import DealsCreate from "./pages/Deals/DealsCreate/DealsCreate";
import DealsFreshdesk from "./pages/Deals/DealsFreshdesk/DealsFreshdesk";

// import cs from "./App.module.css";

function App() {
  return (
    <Switch>
      <Route path="/settings-account" exact component={AccountSettings} />
      <Route path="/settings-notifications" exact component={NotificationsSettings} />
      <Route path="/settings-integrations" exact component={IntegrationsSettings} />
      <Route path="/settings-colleagues" exact component={ColleaguesSettings} />
      <Route path="/settings-tags" exact component={TagsSettings} />
      <Route path="/contacts" exact component={Contacts} />
      <Route path="/contacts-box" exact component={ContactBox} />
      <Route path="/contacts-box-create" exact component={ContactBoxCreate} />
      <Route path="/contacts-create" exact component={ContactsCreate} />
      <Route path="/contacts-recent" exact component={ContactsRecentActivity} />
      <Route path="/contacts-tab" exact component={ContactsTab} />
      <Route path="/contacts-details" exact component={ContactsDetails} />
      <Route path="/contacts-checked-item" exact component={TableCheckedItem} />
      <Route path="/contacts-delete" exact component={ContactsDelete} />
      <Route path="/tasks" exact component={Tasks} />
      <Route path="/tasks-create-task" exact component={CreateTask} />
      <Route path="/deals" exact component={Deals} />
      <Route path="/deals-create" exact component={DealsCreate} />
      <Route path="/deals-flashdesk" exact component={DealsFreshdesk} />
      <Route path="/emails" exact component={Emails} />
      <Route path="/emails-checked" exact component={TableChecked} />
      <Route path="/emails-view" exact component={EmailsView} />
      <Route path="/emails-view-content" exact component={EmailsViewContent} />
      <Route path="/emails-recepients" exact component={EmailRecepients} />
      <Route path="/emails-component" exact component={EmailCreateComponents} />
      <Route path="/emails-create-content" exact component={EmailCreateContent} />
      <Route path="/emails-create" exact component={EmailCreate} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/homepage" exact component={Homepage} />
      <Route path="/documentation" exact component={Documentation} />
      <Redirect to="/" />
    </Switch>

  );
}
export default App;