import Driverform from "./drivers/Driverform";
import {
  BrowserRouter as Router,
  Switch ,
  Route
} from "react-router-dom"
import Submitsuccess from "./drivers/Submitsuccess";
import Driverform1 from "./drivers/Driverform1";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Driverform1/>
            </Route>
          <Route path="/success">
            <Submitsuccess/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

