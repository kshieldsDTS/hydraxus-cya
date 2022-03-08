import './App.css';
import { Routes, Route } from 'react-router-dom'
import Status from './Components/Status'
import Welcome from './Components/Welcome'

function App() {
  return (
    <div className="App">
      <Status/>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
      </Routes>
    </div>
  );
}

export default App;
