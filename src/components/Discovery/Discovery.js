import React, { useState } from 'react';
import DiscoveryContent from './DiscoveryContent';
import Button from '../Button/Button';

function Discovery(props) {
    return (
        <section className="">
            <div className="">
                <DiscoveryContent className="content" name={ props.name } />
                <Button name="next" onClick={ props.handleClick } />
            </div>
        </section>
    );
};

export default Discovery;
