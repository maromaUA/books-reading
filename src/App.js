import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import { lazy } from 'react';
import Layout from './components/Layout/Layout';
import Library from './pages/Library/Library';
import LoginRegistration from './pages/LoginRegistration/LoginRegistration';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<LoginRegistration/>} redirectTo="library"></Route>
          <Route path="library" element={<Library/>}></Route>
          <Route path="*" element={<Navigate to="/"/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
