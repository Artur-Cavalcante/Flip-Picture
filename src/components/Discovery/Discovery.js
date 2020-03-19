import React from 'react';
import DiscoveryContent from './DiscoveryContent';
import Button from '../Button/Button';

function Discovery(){
    const [techs, setTechs] = useState(['docker', 'postgres', 'firefox', 'git', 'nginx']);
    const [index, setIndex] = useState(0);

    return(
        <section className="">
            <div className="">
                <DiscoveryContent name={techs[index]}/>
            </div>
        </section>
    );
};

export default Discovery;