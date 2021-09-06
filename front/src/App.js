import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar";
import BoardList from "./components/BoardList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BoardCreate from "./components/BoardCreate";
import BoardDetail from "./components/BoardDetail";
import Footer from "./components/Footer";
import NoMatch from "./components/NoMatch";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#039be5',
      dark: '#006db3',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
