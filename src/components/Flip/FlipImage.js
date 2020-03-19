import React from 'react';

// Initializing import images
import docker_top_left from './Techs/Docker/images/top_left.png';
import docker_top_right from './Techs/Docker/images/top_right.png';
import docker_bottom_left from './Techs/Docker/images/bottom_left.png';
import docker_bottom_right from './Techs/Docker/images/bottom_right.png';

import firefox_top_left from './Techs/Firefox/images/top_left.png';
import firefox_top_right from './Techs/Firefox/images/top_right.png';
import firefox_bottom_left from './Techs/Firefox/images/bottom_left.png';
import firefox_bottom_right from './Techs/Firefox/images/bottom_right.png';

import git_top_left from './Techs/Git/images/top_left.png';
import git_top_right from './Techs/Git/images/top_right.png';
import git_bottom_left from './Techs/Git/images/bottom_left.png';
import git_bottom_right from './Techs/Git/images/bottom_right.png';

import nginx_top_left from './Techs/Nginx/images/top_left.png';
import nginx_top_right from './Techs/Nginx/images/top_right.png';
import nginx_bottom_left from './Techs/Nginx/images/bottom_left.png';
import nginx_bottom_right from './Techs/Nginx/images/bottom_right.png';

import postgres_top_left from './Techs/Postgres/images/top_left.png';
import postgres_top_right from './Techs/Postgres/images/top_right.png';
import postgres_bottom_left from './Techs/Postgres/images/bottom_left.png';
import postgres_bottom_right from './Techs/Postgres/images/bottom_right.png';



function FlipImage(props){
    // Those variables is for the src in tag img into return.
    let top_left = "";
    let top_right = "";
    let bottom_left = "";
    let bottom_right = "";

    switch (props.name) {
        case "docker":
            top_left = docker_top_left;
            top_right = docker_top_right;
            bottom_left = docker_bottom_left;
            bottom_right = docker_bottom_right;
            break;
        case "firefox":
            top_left = firefox_top_left;
            top_right = firefox_top_right;
            bottom_left = firefox_bottom_left;
            bottom_right = firefox_bottom_right;
            break;
        case "nginx":
            top_left = nginx_top_left;
            top_right = nginx_top_right;
            bottom_left = nginx_bottom_left;
            bottom_right = nginx_bottom_right;
            break;
        case "postgres":
            top_left = postgres_top_left;
            top_right = postgres_top_right;
            bottom_left = postgres_bottom_left;
            bottom_right = postgres_bottom_right;
            break;
        case "git":
            top_left = git_top_left;
            top_right = git_top_right;
            bottom_left = git_bottom_left;
            bottom_right = git_bottom_right;
            break;
        default:
            break;
    };

    return (
        <div className="">
            <img src={top_left} className="" alt="top_left"/>
            <img src={top_right} className="" alt="top_right"/>
            <img src={bottom_left} className="" alt="bottom_left"/>
            <img src={bottom_right} className="" alt="bottom_right"/>
        </div>
    );
};

export default FlipImage;