import { Switch, Redirect, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Tasks from "./pages/Tasks/Tasks";
import Deals from "./pages/Deals/Deals";
import Profile from "./pages/Profile/Profile";
import AccountSettings from "./pages/Settings/AccountSettings/AccountSettings";
import NotificationsSettings from "./pages/Settings/NotificationsSettings/NotificationsSettings";
import IntegrationsSettings from "./pages/Settings/IntegrationsSettings/IntegrationsSettings";

// import cs from "./App.module.css";

function App() {
  return (
    <Switch>
      <Route path="/settings-account" exact component={AccountSettings} />
      <Route path="/settings-notifications" exact component={NotificationsSettings} />
      <Route path="/settings-integrations" exact component={IntegrationsSettings} />
      <Route path="/tasks" exact component={Tasks} />
      <Route path="/deals" exact component={Deals} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/homepage" exact component={Homepage} />
      <Redirect to="/" />
    </Switch>

  );
}
export default App;