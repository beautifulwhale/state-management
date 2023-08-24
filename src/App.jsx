import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Shopping from './components/Shopping';
import TodoList from './store/todo'
import shopping from './store/shopping';
import { MyContext } from './context'


function App() {
  return (
    <MyContext.Provider value={{ TodoList, shopping }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/shopping' element={<Shopping />} />
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
