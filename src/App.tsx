import Api from './Api';
import './App.css';
import SearchAppBar from './components/navbar';
import searchFilter from './components/searchFilter';



function App() {
  return (
    <div className="App" style={{ background: '#243859' }}>

      <SearchAppBar />
      <Api />
      
    </div>
  );
}

export default App;
