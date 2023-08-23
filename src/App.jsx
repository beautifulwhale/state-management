import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import TodoList from './store/todo'
import { TodoContext } from './context'


function App() {
  return (
    <TodoContext.Provider value={{ TodoList }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </TodoContext.Provider>
  );
}

export default App;
