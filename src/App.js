import React, { useState } from 'react';
import { makeStyles, ThemeProvider } from '@mui/styles';

import LoginPage from './Login/LoginPage';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';


function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* <LoginPage /> */}
        <Dashboard />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
