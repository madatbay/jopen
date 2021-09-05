import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar";
import BoardList from "./components/BoardList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BoardCreate from "./components/BoardCreate";
import BoardDetail from "./components/BoardDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Switch>
          <Route path="/create">
            <BoardCreate />
          </Route>
          <Route path="/board/:id" children={<BoardDetail />} />
          <Route exact path="/">
            <BoardList />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
