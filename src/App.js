import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index'
// import NavAdd from './pages/navAdd';
import AddNew from './pages/addNew';

function App() {
  return (
    <Router>
      <Home />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={AddNew} />
      </Routes>
    </Router>   
  );
}

export default App;
