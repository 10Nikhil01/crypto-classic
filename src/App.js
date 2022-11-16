import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CoinPage from "./pages/CoinPage";
import ComparePage from "./pages/Compare";


function App() {

  const setInitialTheme = `
  function getUserPreference() {
    if(window.localStorage.getItem('theme')) {
      return window.localStorage.getItem('theme')
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches 
      ? 'light' 
      : 'dark'
  }
  document.body.dataset.theme = getUserPreference();
`;

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
      <div className="cursor" id="cursor"></div>
      <div className="cursor-pointer" id="cursor-pointer"></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/coin" element={<CoinPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
