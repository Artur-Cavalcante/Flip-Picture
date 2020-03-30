import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import ClickImage from './ClickImage';

function Flip(props) {


    const [AllCorrectly, setAllCorrectly] = useState({ "top_left": false, "top_right": false, "bottom_left": false, "bottom_right": false });

    function CheckAllCorrectly() {
        if ((AllCorrectly.top_left === true) && (AllCorrectly.top_right === true)
            (AllCorrectly.bottom_left === true) && (AllCorrectly.bottom_right === true)) {
            return true;
        } else {
            return false;
        }
    };

    const [OrientationTopLeft, setOrientationTopLeft] = useState(0);
    const [OrientationTopRight, setOrientationToRight] = useState(0);
    const [OrientationBottomLeft, setOrientationBottomLeft] = useState(0);
    const [OrientationBottomRight, setOrientationBottomRight] = useState(0);

    useEffect(() => {
        CheckAllCorrectly() //Terminar aqui
    }, [OrientationTopLeft, OrientationTopRight, OrientationBottomLeft, OrientationBottomRight])

    function handleTurnLeft(){
        setOrientationTopLeft(OrientationTopLeft - 90)
    }


    return (

        <section className="" >
            <div className="">
                <ClickImage
                    name={props.name}
                    TopLeftOrientation = {OrientationTopLeft}
                    TopRightOrientation = {OrientationTopRight}
                    BottomLeftOrientation = {OrientationBottomLeft}
                    BottomRightOrientation = {OrientationBottomRight}
                />
            </div>

            <div className="">
                <Button name="Left" onClick={ handleTurnLeft } />
                <Button name="Right" onClick={console.log('teste')} />
            </div>
        </section >
    );
};

export default Flip;