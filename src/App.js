import './App.css';
import { Routes, Route } from 'react-router-dom'
import Status from './Components/Status'
import Welcome from './Components/Welcome'
import C1P1 from './Components/Chapter 1/C1P1'
import C1P2 from './Components/Chapter 1/C1P2'
import C1P3 from './Components/Chapter 1/C1P3'

function App() {
  return (
    <div className="App">
      <Status/>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/c1p1' element={<C1P1/>}/>
        <Route path='/c1p2' element={<C1P2/>}/>
        <Route path='/c1p3' element={<C1P3/>}/>
      </Routes>
    </div>
  );
}

export default App;
