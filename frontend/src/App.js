import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ProductDetails from './ProductDetails';
function App() {
  return (
    <>
    <Router>
    <Header/>
    <Routes>
    <Route exact path="/" element={<ProductList /> }></Route>
    <Route path='/product/:id' element={<ProductDetails/>}></Route>

    </Routes>
    <Footer/>
    </Router>
    </>
    
  );
}

export default App;
