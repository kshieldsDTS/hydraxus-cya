import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Status from './Components/Status'
import Welcome from './Components/Welcome'
import Narrative from './Components/Narrative';

function App() {
  const [id, setId] = useState(0)
  return (
    <div className="App">
      <Status/>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        {/* <Route path='/c1p1' element={<C1P1/>}/>
        <Route path='/c1p2' element={<C1P2/>}/>
        <Route path='/c1p3' element={<C1P3/>}/> */}
        <Route path='/story' element={<Narrative id={id} setId={setId}/>}/>
      </Routes>
    </div>
  );
}

export default App;
