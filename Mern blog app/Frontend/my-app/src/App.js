import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './Components/home';
import Signin from './Components/signin';

import CreateBlog from './Components/createBlog';
import BlogDetails from './Components/blogDetails';
import Signup from './Components/signup';


function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signin" component={Signin}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/create" component={CreateBlog}/>
        <Route exact path="/blog-detail" component={BlogDetails}/>

      </Switch>
    </div>
  );
}

export default App;
