import cs from "./App.module.css";

function App() {
  return (
    <div className={cs["container"]}>
      <div className={cs["searchbar"]}>SEARCHBAR</div>
      <nav className={cs["sidebar"]}>SIDEBAR</nav>
      <div className={cs["content"]}>CONTENT</div>
    </div>
  );
}

export default App;
