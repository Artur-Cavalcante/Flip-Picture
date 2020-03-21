import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import FlipImage from './FlipImage';

function Flip(props) {
    return (
        <section className = "" >
            <div className="">
                <FlipImage name={props.name} imgSelect={props.isSelect} />
            </div>

            <div className="">
                <Button name="Left" />
                <Button name="Right" />
            </div>
        </section >
    );
};

export default Flip;