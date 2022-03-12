import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { Navbar } from './components/Navbar';
import { SignUp } from './components/SignUp';
import { Login } from './components/Login';
import { Home } from "./components/Home";
import { ReadPStrategy } from "./components/ReadPStrategy";

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
      <Route exact path="/">
      <SignUp/>
      </Route>
      <Route exact path="/login">
        <Login/>
      </Route>
      <Route exact path="/home">
        <Home/>
      </Route>
      <Route exact path="/ReadPStrategy">
        <ReadPStrategy/>
      </Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;
