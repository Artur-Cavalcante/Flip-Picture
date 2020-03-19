import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import FlipImage from './FlipImage';

import docker_top_left from './Techs/Docker/images/top_left.png';

function Flip(props) {
    const [techs, setTechs] = useState(['docker', 'postgres', 'firefox', 'git', 'nginx']);
    const [index, setIndex] = useState(0);

    return (
        <section className="">
            <div className="">
                <FlipImage name={techs[index]}/>
            </div>
                
            <div className="">
                <Button name="Left" />
                <Button name="Right" />
            </div>
        </section>
    );
};

export default Flip;