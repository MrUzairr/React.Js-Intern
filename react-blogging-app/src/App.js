import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './Components/home';
import CreateBlog from './Components/createBlog';
import BlogDetails from './Components/blogDetails';


function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/create" component={CreateBlog}/>
        <Route exact path="/blog-detail" component={BlogDetails}/>

      </Switch>
    </div>
  );
}

export default App;
