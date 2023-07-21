import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './Components/home';
import Service from './Components/service';
import About from './Components/about';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/service" component={Service}/>
        <Route exact path="/about" component={About}/>
      </Switch>
    </div>
  );
}

export default App;
