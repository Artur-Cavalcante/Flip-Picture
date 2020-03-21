import React, { useEffect, useState } from 'react';

import Header from '../Header/Header';
import Flip from '../Flip/Flip';
import Discovery from '../Discovery/Discovery';
import Footer from '../Footer/Footer';
import '../Styles/output_tailwind.css';

function App() {
  const [isCorrectly, setIsCorrectly] = useState(false);
  const [isSelect, setIsSelect] = useState(false);

  const [techs, setTechs] = useState(['docker', 'postgres', 'firefox', 'git', 'nginx']);
  const [index, setIndex] = useState(0);


  function handleLastContent() {
    if (index < 4) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    };
  };

  function CheckSelect(){
    if (isSelect){
      
    }
  } 

  return (
    <>
      <Header />
      <Flip name={ techs[index] } isSelect={}/>
        <Discovery name={ techs[index] } handleClick={ handleLastContent }/>
      <Footer />
    </>
  );
}

export default App;
