import React, { useState, useEffect } from 'react';
import './style.css'

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

function FlipImage(props) {
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

    const [TopLeftClass, setTopLeftClass] = useState(' ');
    const [TopRightClass, setTopRightClass] = useState(' ');
    const [BottomLeftClass, setBottomLeftClass] = useState(' ');
    const [BottomRightClass, setBottomRightClass] = useState(' ');

    function CheckWichSelect() {
        var img = false;
        if (TopLeftClass.indexOf('select') != -1) {
            img = 'top_left';
        }
        if (TopRightClass.indexOf('select') != -1) {
            img = 'top_right';
        }
        if (BottomLeftClass.indexOf('select') != -1) {
            img = 'bottom_left';
        }
        if (BottomRightClass.indexOf('select') != -1) {
            img = 'bottom_right';
        }
        return img;
    }



    function handleClickTopLeft() {
        if (CheckWichSelect() == false ||  CheckWichSelect() == 'top_left' ) {
            if (TopLeftClass.indexOf('select') !== -1) {
                setTopLeftClass(TopLeftClass.replace('select', ''));
            }else{
                setTopLeftClass(TopLeftClass.concat(' select'));
            };
        }
    };

    function handleClickTopRight() {
        if (CheckWichSelect() == 'top_right' || CheckWichSelect() == false) {
            if (TopRightClass.indexOf('select') !== -1) {
                setTopRightClass(TopRightClass.replace('select', ''));
            } else {
                setTopRightClass(TopRightClass.concat('select'));
            };
        }
    };

    function handleClickBottomLeft() {
        if (CheckWichSelect() == 'bottom_left' || CheckWichSelect() == false) {
            if (BottomLeftClass.indexOf('select') !== -1) {
                setBottomLeftClass(BottomLeftClass.replace('select', ''));
            } else {
                setBottomLeftClass(BottomLeftClass.concat('select'));
            };
        }
    };

    function handleClickBottomRight() {
        if (CheckWichSelect() == 'bottom_right' || CheckWichSelect() == false) {
            if (BottomRightClass.indexOf('select') !== -1) {
                setBottomRightClass(BottomRightClass.replace('select', ''));
            } else {
                setBottomRightClass(BottomRightClass.concat('select'));
            };
        }
    };


    function TurnLeftTopLeft(){
        console.log(TopLeftClass)
        setTopLeftClass(TopLeftClass.concat(' turn_left'));
    }
    function TurnRightTopLeft(){
        setTopLeftClass(TopLeftClass.concat(' turn_right'))
    }   
    
    useEffect(() => {
        TurnLeftTopLeft()
    }, [props.TopLeftOrientation])

    return (
        <div className="box-img">
            <img
                id="img_top_left"
                src={top_left}
                className={TopLeftClass} //Concatenar as classes das imagens aqui
                onClick={handleClickTopLeft}
                alt="top_left"
            />
            <img
                id="img_top_right"
                src={top_right}
                className={TopRightClass}
                onClick={handleClickTopRight}
                alt="top_right"
            />
            <img
                id="img_bottom_left"
                src={bottom_left}
                className={BottomLeftClass}
                onClick={handleClickBottomLeft}
                alt="bottom_left"
            />
            <img
                id="img_bottom_right"
                src={bottom_right}
                className={BottomRightClass}
                onClick={handleClickBottomRight}
                alt="bottom_right"
            />
        </div>
    );
};

export default FlipImage;