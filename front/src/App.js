import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar";
import BoardList from "./components/BoardList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import BoardCreate from "./components/BoardCreate";

function App() {
  return (
    <Router>
      <Navbar/>
      <Container>
        <Switch>
          <Route path='/create'>
            <BoardCreate />
          </Route>
        </Switch>
        <Switch>
          <Route exact path='/'>
            <BoardList />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
