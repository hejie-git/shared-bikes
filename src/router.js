import React from "react";
import App from './App';
import Admin from "./admin";
import Home from "./pages/home/Home";
import Buttons from "./pages/ui/buttons";
import Modals from "./pages/ui/modals"
import NoMatch from "./pages/nomatch";
import { HashRouter, Route, Switch} from "react-router-dom";

const IRouter = () =>{
  return (
    <HashRouter>
      <App>
        {/*<Route exact path="/" component={Admin}/>*/}
        <Route path="/admin" render={() =>
          <Admin>
            <Switch>
              <Route path="/admin/home" component={Home}/>
              <Route path="/admin/ui/buttons" component={Buttons}/>
              <Route path="/admin/ui/modals" component={Modals}/>
              <Route component={NoMatch}/>
            </Switch>
          </Admin>
        }/>
      </App>
    </HashRouter>
  )
};

export default IRouter