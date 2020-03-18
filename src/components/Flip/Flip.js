import React, { useState } from 'react';
import Button from '../Button/Button';
import FlipImage from './FlipImage';


function Flip(props) {
    const [path_image, setPath_image] = useState(["Docker", "Firefox", "Git", "Nginx", "Postgres"]);
    const [index, setIndex] = useState(0);

    
    return (
        <section className="">
            <div className="">
                <FlipImage name={path_image[index]}/>
            </div>
                
            <div className="">
                <Button name="Left" />
                <Button name="Right" />
            </div>
        </section>
    );
};

export default Flip;