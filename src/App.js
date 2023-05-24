import './App.css';
import Home from './Components/Home/Home';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Shop from './Components/SHOP/Shop';
import About from './Components/ABOUT/About';
import Contact from './Components/CONTACT/Contact';
import { AuthProvider } from './Components/utils/auth';
import {Provider} from "react-redux";
import store from './Components/store/store';
import Productpage from './Components/ProductPage/Productpage';
import { useParams } from 'react-router-dom';
import CartSummaryPage from './Components/CartSummaryPage/CartSummaryPage';
import Login from './Components/Login/Login';


function App() {

 

  return (
    <div className="App">
    {/* <AuthProvider> */}
      <Provider store={store}> 
        <Router>
              <Routes>
                <Route exact path="/contact" Component={Contact} />
                <Route exact path="/product-page/:decodedProduct" Component={Productpage} />
                <Route exact path="/about" Component={About} />
                <Route exact path="/login" Component={Login} />

                <Route exact path="/cart" Component={CartSummaryPage} />
                <Route exact path='/shop' Component={Shop} />
                <Route exact path="/home" Component={Home} />
              </Routes>
        </Router>
      </Provider>
    {/* </AuthProvider> */}
    </div>
  );
}

export default App;
