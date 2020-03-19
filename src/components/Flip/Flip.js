import React, { useState } from 'react';
import Button from '../Button/Button';
import FlipImage from './FlipImage';

function Flip() {
    const [techs, setTechs] = useState(['docker', 'postgres', 'firefox', 'git', 'nginx']);
    const [index, setIndex] = useState(0);

    function NextImage() {
        if (index < 4) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    return (
        < section className = "" >
            <div className="">
                <FlipImage name={techs[index]} />
            </div>

            <div className="">
                <Button name="Left" />
                <Button name="Right" />
            </div>
        </section >
    );
};

export default Flip;