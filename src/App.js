import './App.css';
import Home from './Components/Home/Home';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Shop from './Components/SHOP/Shop';

function App() {


  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
            <Route exact path='/shop' Component={Shop} />
            <Route exact path="/home" Component={Home} />
        </Routes>
    </BrowserRouter>
        
    </div>
  );
}

export default App;
