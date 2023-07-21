import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './Components/home';
import Product from './Components/product';
import Cart from './Components/cart';
import Contact from './Components/contact';
import Signin from './Components/signin';
import Signup from './Components/signup';
import AddCart from './Components/Extra_Components/addCart';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/product' component={Product}/>
        <Route exact path='/cart' component={Cart}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/signin' component={Signin}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/addcart' component={AddCart}/>
      </Switch>
    </div>
  );
}

export default App;
