
import './App.css';
import Button from '@material-ui/core/Button';
import Registration from './Component/SignUp/Registration';
import Signin from './Component/Login/Signin';
import Forgotpassword from './Component/forgotPassword/forgotPassword';
import ResetPassword from './Component/ResetPassword/resetPassword';
import Dashboard from './Component/Dashboard/Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



function App() {
  return (
  <div className="App">
    <BrowserRouter>
    <Switch>
    <Route path="/" component={Registration} exact></Route>
    <Route path="/signin" component={Signin} exact></Route>
    <Route path="/forgotpassword" component={Forgotpassword} exact></Route>
    <Route path="/resetpassword/:token" component={ResetPassword} exact></Route>
    <Route path="/dashboard" component={Dashboard} exact></Route>
    </Switch>
    </BrowserRouter>
    </div>
  );
}
export default App;
