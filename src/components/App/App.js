import React from 'react';

import Header from '../Header/Header';
import Flip from '../Flip/Flip';
import Discovery from '../Discovery/Discovery';
import Footer from '../Footer/Footer';
import '../Styles/output_tailwind.css';

function App() {
  return (
    <>
      <Header />
      <Flip />
      <Discovery />
      <Footer />
    </>
  );
}

export default App;
