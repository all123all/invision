import SignInScreen from './SignIn/SignIn';
import SignUpScreen from './SignUp/SignUp';
import {BrowserRouter as Router} from "react-router-dom";

import Routes from './routes';

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
