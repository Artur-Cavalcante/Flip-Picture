import React from 'react';

import docker_top_left from './Techs/Docker/images/top_left.png'
import docker_top_right from './Techs/Docker/images/top_right.png'
import docker_bottom_left from './Techs/Docker/images/bottom_left.png'
import docker_bottom_right from './Techs/Docker/images/bottom_right.png'


function FlipImage(props){
    

    return (
        <div className="">
            <img src={'props.name' + '_top_left'} className="" alt="top_left" />
            <img src={props.top_right} className="" alt="top_right" />
            <img src={props.bottom_left} className="" alt="bottom_left" />
            <img src={props.bottom_right} className="" alt="bottom_right" />
        </div>
    );
};

export default FlipImage;