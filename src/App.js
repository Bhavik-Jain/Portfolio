import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";
import { Route, Switch } from 'react-router-dom';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App(){
  return(
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
};

export default App;
