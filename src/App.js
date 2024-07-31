// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Board from './Component/CoCaNgua/Board';
// import NewPage from './Component/CoCaNgua/NewPage';
// import SnakeGame from './Component/CoCaNgua/SnakeGame';
// import './App.css';
import React from 'react';
import AlbumFeature from './Features/Album';

function App() {
  return (
    <div className="App">
      <AlbumFeature />
    </div>


    // <Router>
    //   <Routes>
    //     <Route path='/' element={<SnakeGame />} />
    //     <Route path='/NewPage' element={<NewPage />} />
    //   </Routes>
    // </Router >
  );
}

export default App;
