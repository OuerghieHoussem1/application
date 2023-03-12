import {HashRouter as Router,Switch,Route,Link} from "react-router-dom"
import Main from "./pages/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import Reservation from "./pages/Reservation";
import { BreakpointProvider } from 'react-socks';
import CheckReservations from "./pages/CheckReservations";
function App() {
  return (
    <Router>
      <Switch>
        <BreakpointProvider>
          <Route path="/" exact><Main/></Route>
          <Route path="/reservation" exact><Reservation/></Route>
          <Route path="/20101999CheckReservations20101999" exact><CheckReservations/></Route>
        </BreakpointProvider>
      </Switch>
    </Router>
  );
}

export default App;
