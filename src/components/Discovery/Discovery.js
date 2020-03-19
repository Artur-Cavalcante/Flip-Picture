import React, { useState } from 'react';
import DiscoveryContent from './DiscoveryContent';
import Button from '../Button/Button';

function Discovery(){
    const [techs, setTechs] = useState(['docker', 'postgres', 'firefox', 'git', 'nginx']);
    const [index, setIndex] = useState(0);

    return(
        <section className="">
            <div className="">
                <DiscoveryContent className="content" name={techs[index]}/>
                <Button name="next" onClick={() => { if (index < 4){ setIndex(index + 1); }else{ setIndex(0) }}}/>
            </div>
        </section>
    );
};

export default Discovery;