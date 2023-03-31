import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Home';
import Cart from './Cart';
import Register from './Register';
import Navbar from './Navbar';
import ProductInfo from './ProductInfo';
import Login from './Login';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product/:id' element={<ProductInfo/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      <ToastContainer/>
    </Router>
  );
}export default App;