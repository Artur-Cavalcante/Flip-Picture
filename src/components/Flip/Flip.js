import React, { useState }from 'react';
import Button from '../Button/Button';
import ClickImage from './ClickImage';

function Flip(props) {

    return (

        <section className = "" >
            <div className="">
                <ClickImage name={props.name} />
            </div>

            <div className="">
                <Button name="Left" />
                <Button name="Right" />
            </div>
        </section >
    );
};

export default Flip;