import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index'
import AddNew from './pages/addNew';

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/add" element={<AddNew />}/>
      </Routes>
    </Router>   
  );
}

export default App;
