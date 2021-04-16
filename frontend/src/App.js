import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

///SCREENS///
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import CartScreen from './screens/CartScreen'

///COMPONENTS///
import Navbar from './components/Navbar'


function App() {
  return (
    <Router>
    <Navbar/>

     <main>
       <Switch>
         <Route exact path="/" component={HomeScreen}/>
         <Route exact path="/product/:id" component={ProductScreen}/>
         <Route exact path="/cart" component={CartScreen}/>
       </Switch>
     </main>

    </Router>
  );
}

export default App;
