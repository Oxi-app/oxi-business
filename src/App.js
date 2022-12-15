import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import AddProduct from './AddProduct';
import AddMaterial from './AddMaterial';
import './App.css';
import AddLogistic from './AddLogistic';
import AddProcess from './AddProcess';
import PreProduct from './PreProduct';
  
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/AddProduct">AddProduct</Link>
              </li>
              <li>
                <Link to="/AddMaterial">AddMaterial</Link>
              </li>
              <li>
                <Link to="/AddLogistic">AddLogistic</Link>
              </li>
              <li>
                <Link to="/AddProcess">AddProcess</Link>
              </li>
              <li>
                <Link to="/PreProduct">PreProduct</Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/AddProduct' element={< AddProduct />}></Route>
                 <Route exact path='/AddMaterial' element={< AddMaterial />}></Route>
                 <Route exact path='/AddLogistic' element={< AddLogistic />}></Route>
                 <Route exact path='/AddProcess' element={< AddProcess />}></Route>
                 <Route exact path='/PreProduct' element={< PreProduct />}></Route>


          </Routes>
          </div>
       </Router>
   );
  }
}
  
export default App;