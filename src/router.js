import React from "react";
import App from './App';
import Admin from "./admin";
import Home from "./pages/home/Home";
import Buttons from "./pages/ui/buttons";
import Modals from "./pages/ui/modals"
import NoMatch from "./pages/nomatch";
import Loading from "./pages/ui/loading";
import Notification from "./pages/ui/notification";
import Message from "./pages/ui/message";
import Pagelabel from "./pages/ui/pagelabel";
import Broadcastmap from "./pages/ui/broadcastmap";
import Login from "./pages/form/login";
import Reg from "./pages/form/reg";
import BasicTable from "./pages/table/basicTable";
import { HashRouter, Route, Switch, Redirect} from "react-router-dom";

const IRouter = () =>{
  return (
    <HashRouter>
      <Route exact path={'/'} render={()=>(<Redirect to={'/admin/home'}/>)}/>
      <App>
        <Route path="/admin" render={() =>
          <Admin>
            <Switch>
              <Route path="/admin/home" component={Home}/>
              <Route path="/admin/ui/buttons" component={Buttons}/>
              <Route path="/admin/ui/modals" component={Modals}/>
              <Route path="/admin/ui/loading" component={Loading}/>
              <Route path="/admin/ui/notification" component={Notification}/>
              <Route path="/admin/ui/message" component={Message}/>
              <Route path="/admin/ui/pagelabel" component={Pagelabel}/>
              <Route path="/admin/ui/broadcastmap" component={Broadcastmap}/>
              <Route path="/admin/form/login" component={Login}/>
              <Route path="/admin/form/reg" component={Reg}/>
              <Route path="/admin/table/basictable" component={BasicTable}/>
              <Route component={NoMatch}/>
            </Switch>
          </Admin>
        }/>
      </App>
    </HashRouter>
  )
};

export default IRouter