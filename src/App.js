import './App.css';
import { AuthProvider } from './Components/utils/auth';
import {Provider} from "react-redux";
import store from './Components/store/store';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useParams } from 'react-router-dom';
import React, { Suspense } from "react";

import { List } from 'react-content-loader';

const Home=React.lazy(()=> import('./Components/Home/Home'));

const Shop=React.lazy(()=> import ('./Components/SHOP/Shop'));
const About=React.lazy(()=> import('./Components/ABOUT/About'));
const Contact=React.lazy(()=> import('./Components/CONTACT/Contact'));

const Productpage = React.lazy(()=> import('./Components/ProductPage/Productpage'));
const CartSummaryPage = React.lazy(()=> import('./Components/CartSummaryPage/CartSummaryPage'));
const Login =React.lazy(()=> import('./Components/Login/Login'));
const Signup=React.lazy(()=> import('./Components/Signup/Signup'));

const MyListLoader = () => <List />

function App() {

 

  return (
    <div className="App">
    {/* <AuthProvider> */}
    <Suspense fallback={<MyListLoader />}>
      <Provider store={store}> 
        <Router>
              <Routes>
                <Route exact path="/contact" Component={Contact} />
                <Route exact path="/product-page/:decodedProduct" Component={Productpage} />
                <Route exact path="/about" Component={About} />
                 {/* <Route exact path="/login" Component={Login} /> */}
                
                <Route exact path="/signup" Component={Signup} /> 

                <Route exact path="/cart" Component={CartSummaryPage} />
                <Route exact path='/shop' Component={Shop} />
                <Route exact path="/home" Component={Home} />
              </Routes>
        </Router>
      </Provider>
    {/* </AuthProvider> */}
    </Suspense>
    </div>
  );
}

export default App;
