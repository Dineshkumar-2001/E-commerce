import logo from './logo.svg';
import './App.css';
import Front_page from './Front_page';
import Add_product from './Add_product';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Front_page/> */}

      <Routes>
    <Route exact path='/' element={< Front_page />}></Route>
    <Route exact path='/Add_product' element={< Add_product />}></Route>
    
</Routes>
    </div>
  );
}

export default App;
