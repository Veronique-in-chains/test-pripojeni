import React, {useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import ConnectedPage from './components/ConnectedPage';
import './style.css';

const App = () => {

  return (
    <BrowserRouter>
      <nav className="container">
        <Link to="/">Domů</Link>
        &nbsp;
        &nbsp;
        <Link to="/test">Test připojení</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<ConnectedPage />} />
      </Routes>
    </BrowserRouter>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
