import './App.css';
import Header from './components/Header';
import Newnote from './components/Newnote';
import Notes from './components/Notes';

function App() {
  return (
    <div className="App">
      <Header/>
      <Newnote/>
      <Notes/>
    </div>
  );
}

export default App;
