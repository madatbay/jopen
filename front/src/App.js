import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar";
import BoardList from "./components/BoardList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BoardCreate from "./components/BoardCreate";
import BoardDetail from "./components/BoardDetail";
import Footer from "./components/Footer";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/">
            <BoardList />
          </Route>
          <Route path="/create">
            <BoardCreate />
          </Route>
          <Route path="/board/:id" children={<BoardDetail />} />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
