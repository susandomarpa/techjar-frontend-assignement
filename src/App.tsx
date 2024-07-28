import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route 
            path="/dashboard" 
            element={<Dashboard />}>
          </Route>
      </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

