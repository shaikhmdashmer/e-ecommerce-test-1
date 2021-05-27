import './App.css';
import { Home } from './Components/Home';
import { ProductDetails } from './Components/ProductDetails';
import {BrowserRouter as Router, Route} from "react-router-dom"
function App() {
  return (
    <Router>
      <div className="App">
      <Route path="/" exact component={Home} />
      <Route path="/productDetails" exact component={ProductDetails}/>
      </div>
    </Router> 
  );
}

export default App;
