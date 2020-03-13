import React from "react";
import App from './App';
import Admin from "./admin";
import Home from "./pages/home/Home";
import Buttons from "./pages/ui/buttons";
import NoMatch from "./pages/nomatch";
import { HashRouter, Route, Switch} from "react-router-dom";

const IRouter = () =>{
  return (
    <HashRouter>
      <App>
        <Route path="/admin" render={() =>
          <Admin>
            <Switch>
              <Route path="/admin/home" component={Home}/>
              <Route path="/admin/ui/buttons" component={Buttons}/>
              <Route component={NoMatch}/>
            </Switch>
          </Admin>
        }/>
      </App>
    </HashRouter>
  )
};

export default IRouter