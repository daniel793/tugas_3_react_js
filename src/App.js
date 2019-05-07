import React from 'react';
import './App.css';
import Header from './Page/Header';
import Footer from './Page/Footer';
import MenuMakanan from './Page/MenuMakanan';

function App() {
  return (
    <div className="App">
      <Header />

      <MenuMakanan />
      
      <Footer/>
    </div>
  );
}

export default App;
