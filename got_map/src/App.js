import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ClickMe from "./pages/clickme";
import Intro from "./pages/intro";
import Map from "./pages/map";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ClickMe} />
          <Route path="/intro" component={Intro} />
          <Route path="/map" component={Map} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
