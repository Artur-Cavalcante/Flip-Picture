import React from 'react';
import Button from '../Button/Button'


function Flip(props) {
    return (
        <section className="">
            <div className="">
                <img src={props.src_top_left} alt="top_left"/>
                <img src={props.src_top_right} alt="top_right"/>
                <img src={props.src_bottom_left} alt="bottom_left"/>
                <img src={props.src_bottom_right} alt="bottom_right"/>
            </div>
                
            <div className="">
                <Button name="Left" />
                <Button name="Direito" />
            </div>
        </section>
    );
};

export default Flip;