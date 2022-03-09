import './App.css';
import { Routes, Route } from 'react-router-dom'
import Status from './Components/Status'
import Welcome from './Components/Welcome'
import C1P2 from './Components/c1p2'

function App() {
  return (
    <div className="App">
      <Status/>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/c1p2' element={<C1P2/>}/>
      </Routes>
    </div>
  );
}

export default App;
