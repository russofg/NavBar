import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer />
        <ItemCount stock="10" initial="1" />
      </header>
    </div>
  );
}

export default App;
