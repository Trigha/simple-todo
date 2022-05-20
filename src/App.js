import './App.css';
// import NavHome from './component/navHome';
import ListToDo from './component/listToDo';
import NavAdd from './component/navAdd';
import AddNew from './component/addNew';

function App() {
  return (
    <div className="App">
      {/* <NavHome /> */}
      <NavAdd />
      {/* <ListToDo /> */}
      <AddNew />
    </div>
  );
}

export default App;
