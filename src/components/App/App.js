import React, { useState, useEffect } from 'react';

import Header from '../Header/Header';
import Flip from '../Flip/Flip';
import Discovery from '../Discovery/Discovery';
import Footer from '../Footer/Footer';
import '../Styles/output_tailwind.css';

function App() {
  const [techs] = useState(['docker', 'postgres', 'firefox', 'git', 'nginx']);
  const [index, setIndex] = useState(0);

  const [callDiscovery, setCallDiscovery] = useState(false);
  const [discoveryComponent, setDiscoveryComponent] = useState('');

  function HandleLastContent() {
    if (index < 4) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    };
  };
//Agora tem que fazer com que qunado passe para proxima foto, ela volte a posição 0, e retire os content, e no fim, resolver problema de calculo de correctly
  function getIfAllCorrectly() {
    setCallDiscovery(true);
  }

  useEffect(()=>{
    if (callDiscovery === true){
      console.log('foi')
      setDiscoveryComponent(<Discovery name={techs[index]} handleClick={HandleLastContent} />)
    }
  }, [callDiscovery])

  return (
    <>
      <Header />
      <Flip name={techs[index]} getIfAllCorrectly={getIfAllCorrectly} />
      {discoveryComponent}
      <Footer />
    </>
  );
}

export default App;
