import './App.css';
import Home from './Components/Home/Home';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Shop from './Components/SHOP/Shop';
import About from './Components/ABOUT/About';
import Contact from './Components/CONTACT/Contact';



function App() {


  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
        <Route exact path="/contact-us" Component={Contact} />

          <Route exact path="/about" Component={About} />
            <Route exact path='/shop' Component={Shop} />
            <Route exact path="/home" Component={Home} />
        </Routes>
    </BrowserRouter>
        
    </div>
  );
}

export default App;
