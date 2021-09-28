import { Switch, Redirect, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Tasks from "./pages/Tasks/Tasks";
import Deals from "./pages/Deals/Deals";
import Profile from "./pages/Profile/Profile";

// import cs from "./App.module.css";

function App() {
  return (
    <Switch>
      <Route path="/tasks" exact component={Tasks} />
      <Route path="/deals" exact component={Deals} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/" exact component={Homepage} />
      <Redirect to="/" />
    </Switch>

  );
}
export default App;