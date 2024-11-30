import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Home} from './pages/Home';
import "./styleguide.css";
import { GlobalStateProvider } from "./states/GlobalStateContext";
import {Watch} from "./pages/Watch";
import {Contacts} from "./pages/Contacts";
import {Faq} from "./pages/Faq";
import {AboutUs} from "./pages/AboutUs";
import {Util} from "./pages/Util";
function App() {
  return (
      <Router>
          <GlobalStateProvider>
            <div className="App">
              <header className="App-header">
                <Routes>
                  {/* Маршрут для начальной страницы */}
                  <Route path="/" element={<Home />} />
                    <Route path="/watch/:id" element={<Watch />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/FAQ" element={<Faq />} />
                    <Route path="/aboutus" element={<AboutUs/>} />
                  <Route path="/util" element={<Util/>} />
                </Routes>
              </header>
            </div>
          </GlobalStateProvider>
      </Router>
  );
}

export default App;