import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Index';
import Home from './Component/Home';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import From from './Component/From';
import List from './Component/List';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout component={<Home/>}/>}/>
        <Route path="/form" element={<Layout component={<From/>}/>}/>
        <Route path="/list" element={<Layout component={<List/>}/>}/>
      </Routes>
      </BrowserRouter>
     

    </div>
  );
}

export default App;
