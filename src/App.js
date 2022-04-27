import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/navBar';
import ItemListContainer from './componentes/ItemListContainer';
import Contador from './componentes/Contador';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>  
    </div>
  );
}

export default App;
