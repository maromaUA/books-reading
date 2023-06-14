import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './components/Layout/Layout';
import Library from './pages/Library/Library';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import PrivateRoute from './components/Routes/PrivatRoute';
import PublicRoute from './components/Routes/PublicRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />}></Route>
          <Route
            path="library"
            element={<PrivateRoute component={<Library />} redirectTo="/" />}
          ></Route>
          <Route
            path="training"
            element={
              <PrivateRoute component={<div>Training</div>} redirectTo="/" />
            }
          ></Route>
          <Route path="registration" element={<Registration />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
