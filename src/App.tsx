import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import { Home } from './components/Home';
import { Products } from './components/Products';
import { Reviews } from './components/Reviews';
import NavBar from "./components/NavBar";
import {Cart} from "./components/Cart";
import NotFound from "./components/NotFound"

const App = () => (
  <Router>
    <div>
      <NavBar/>
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/not-found" element={<NotFound />} />     
      </Routes>

    </div>
  </Router>

  
);

export default App;