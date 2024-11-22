import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Home} from './pages/Home';
import "./styleguide.css";
import { GlobalStateProvider } from "./states/GlobalStateContext";
function App() {
  return (
      <Router>
          <GlobalStateProvider>
            <div className="App">
              <header className="App-header">
                <Routes>
                  {/* Маршрут для начальной страницы */}
                  <Route path="/" element={<Home />} />
                </Routes>
              </header>
            </div>
          </GlobalStateProvider>
      </Router>
  );
}

export default App;