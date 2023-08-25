import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Shopping from './components/Shopping';
import TodoList from './store/todo'
import shopping from './store/shopping';
import { MyContext } from './context'
import Router from './router'

function App() {
  return (
    <MyContext.Provider value={{ TodoList, shopping }}>
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/shopping' element={<Shopping />} />
        </Routes>
      </Router> */}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
