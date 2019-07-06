import React from 'react';
import './App.sass';
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';
import MainPage from './components/pages/main-page';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <MainPage />
      <AppFooter />
    </div>
  );
}

export default App;
