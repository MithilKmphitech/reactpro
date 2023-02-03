import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from './Projects/Counter';
import Home from './Home';
import Onchange from './Onchange';
import Crud from './Projects/Crud/Crud';
import Ecommerce from './Ecommerce/Ecommerce';
import InputFile from './InputFile/InputFile';
import SelectMenu from './Components/SelectMenu';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/select" element={<SelectMenu />} />
          <Route path="/crud" element={<Crud />} />
          <Route path="/onchange" element={<Onchange />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/input" element={<InputFile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
