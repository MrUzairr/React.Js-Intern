import './App.css';
import { Switch,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Room from './Pages/Room';
import About from './Pages/About';
import Login from './Pages/Auth/login';
import Signup from './Pages/Auth/signup';
import Booking from './Pages/Booking';
import Profile from './Pages/Profile';
import Admin from './Pages/Admin';
import Services from './Pages/Services';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/room" component={Room}/>
        <Route exact path="/book/:roomid/:fromdate/:todate" component={Booking}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/service" component={Services}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/admin" component={Admin}/>
      </Switch>
    </div>
  );
}

export default App;
