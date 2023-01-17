import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from './Projects/Counter';
import Home from './Home';
import Onchange from './Onchange';
import Crud from './Projects/Crud/Crud';
function App() {
  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/crud" element={<Crud />} />
          <Route path="/onchange" element={<Onchange />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
