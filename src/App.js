import React from 'react';
import './App.css';
import Header from './Page/Header';
import Footer from './Page/Footer';
import MenuMakanan from './Page/MenuMakanan';
import MenuKontak from './Page/MenuKontak';
import MenuTentangKami from './Page/MenuTentangKami';

function App() {
  return (
    <div className="App">
      <Header />

      <MenuMakanan />

      <MenuTentangKami tentang="Warung Nusantara Adalah Restoran Yang Bernuansa Masakan Nusantara, Kami Ada Untuk Membuat Anda Menikmati Masakan Khas Dari Nusantara "/>
      <MenuKontak kontak="Jl. Swadaya IV, Pd.Ranggon, Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13860" hp="081312345678" />


      <Footer/>
    </div>
  );
}

export default App;
