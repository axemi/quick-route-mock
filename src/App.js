import './App.css';
import {Route, Switch} from "react-router-dom"
import {ItemList, ItemInfo} from "./components/itemList"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/ItemInfo" component={ItemInfo}/>
        <Route exact path="/" component={ItemList}/>
      </Switch>
    </div>
  );
}

export default App;
