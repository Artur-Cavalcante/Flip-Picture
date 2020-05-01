import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import ClickImage from './ClickImage';

function Flip(props) {

    //Used for concat the class 'selected' into img
    const [TopLeftClass, setTopLeftClass] = useState(' ');
    const [TopRightClass, setTopRightClass] = useState(' ');
    const [BottomLeftClass, setBottomLeftClass] = useState(' ');
    const [BottomRightClass, setBottomRightClass] = useState(' ');


    //Used for check which orientation of img
    const [RotationTopLeft, setRotationTopLeft] = useState(0);
    const [RotationTopRight, setRotationTopRight] = useState(0);
    const [RotationBottomLeft, setRotationBottomLeft] = useState(0);
    const [RotationBottomRight, setRotationBottomRight] = useState(0);

    //Check if img correctly
    const [TopLeftIsCorrectly, setTopLeftIsCorrectly] = useState(false);
    const [TopRightIsCorrectly, setTopRightIsCorrectly] = useState(false);
    const [BottomLeftIsCorrectly, setBottomLeftIsCorrectly] = useState(false);
    const [BottomRightIsCorrectly, setBottomRightIsCorrectly] = useState(false);

    function CheckAllCorrectly() {
        if ((TopLeftIsCorrectly === true) && (TopRightIsCorrectly === true) &&
            (BottomLeftIsCorrectly === true) && (BottomRightIsCorrectly === true)) {
            return true;
        } else {
            return false;
        }
    };

    function CheckTopLeftCorrectly() {
        let resultTopLeft = RotationTopLeft / 180;
        if ((resultTopLeft % 2 === 1) || (resultTopLeft % 2 === -1)) {
            setTopLeftIsCorrectly(true);
        };
    }

    function CheckTopRightCorrectly() {
        let resultTopRight = RotationTopRight / 180;
        if ((resultTopRight % 2 === 1) || (resultTopRight % 2 === -1)) {
            setTopRightIsCorrectly(true);
        };
    }

    function CheckBottomLeftCorrectly() {
        let resultBottomLeft = RotationBottomLeft / 180;
        if ((resultBottomLeft % 2 === 1) || (resultBottomLeft % 2 === -1)) {
            setBottomLeftIsCorrectly(true);
        };
    }

    function CheckBottomRightCorrectly() {
        let resultBottomRight = RotationBottomRight / 180;
        if ((resultBottomRight % 2 === 1) || (resultBottomRight % 2 === -1)) {
            setBottomRightIsCorrectly(true);
        };
    }


    function CheckWhichSelect() {
        var img = false;
        if (TopLeftClass.indexOf('select') !== -1) {
            img = 'top_left';
        }
        if (TopRightClass.indexOf('select') !== -1) {
            img = 'top_right';
        }
        if (BottomLeftClass.indexOf('select') !== -1) {
            img = 'bottom_left';
        }
        if (BottomRightClass.indexOf('select') !== -1) {
            img = 'bottom_right';
        }
        return img;
    };


    function AddOrRemoveSelectTopLeft() {
        switch (CheckWhichSelect()) {
            case false:
                if (CheckAllCorrectly() === false) {
                    setTopLeftClass(TopLeftClass.concat('select'));
                }
                break;
            case 'top_left':
                setTopLeftClass(TopLeftClass.replace('select', ''));
                break;
            default:
                break;
        }


    };

    function AddOrRemoveSelectTopRight() {
        switch (CheckWhichSelect()) {
            case false:
                if (CheckAllCorrectly() === false) {
                    setTopRightClass(TopRightClass.concat('select'));
                }
                break;
            case 'top_right':
                setTopRightClass(TopRightClass.replace('select', ''));
                break;
            default:
                break;
        }
    }


    function AddOrRemoveSelectBottomLeft() {
        switch (CheckWhichSelect()) {
            case false:
                if (CheckAllCorrectly() === false) {
                    setBottomLeftClass(BottomLeftClass.concat('select'));
                }
                break;
            case 'bottom_left':
                setBottomLeftClass(BottomLeftClass.replace('select', ''));
                break;
            default:
                break;
        }

    };

    function AddOrRemoveSelectBottomRight() {
        switch (CheckWhichSelect()) {
            case false:
                if (CheckAllCorrectly() === false) {
                    setBottomRightClass(BottomRightClass.concat('select'));
                }
                break;
            case 'bottom_right':
                setBottomRightClass(BottomRightClass.replace('select', ''));
                break;
            default:
                break;
        }

    };


    function handleTurnLeft() {
        //Here only modify rotate img, the select into img class is ClickImage
        if (CheckWhichSelect() !== false) {
            switch (CheckWhichSelect()) {
                case ('top_left'):
                    setRotationTopLeft(RotationTopLeft - 90);
                    break;
                case ('top_right'):
                    setRotationTopRight(RotationTopRight - 90);
                    break;
                case ('bottom_left'):
                    setRotationBottomLeft(RotationBottomLeft - 90);
                    break;
                case ('bottom_right'):
                    setRotationBottomRight(RotationBottomRight - 90);
                    break;
                default:
                    break;
            };

        }


    };

    function handleTurnRight() {
        //Here only modify rotate img, the select into img class is ClickImage
        if (CheckWhichSelect() !== false) {
            switch (CheckWhichSelect()) {
                case ('top_left'):
                    setRotationTopLeft(RotationTopLeft + 90);
                    break;
                case ('top_right'):
                    setRotationTopRight(RotationTopRight + 90);
                    break;
                case ('bottom_left'):
                    setRotationBottomLeft(RotationBottomLeft + 90);
                    break;
                case ('bottom_right'):
                    setRotationBottomRight(RotationBottomRight + 90);
                    break;
                default:
                    break;
            };

        }

    };


    //Effect for check if the rotation of imgs are correctly
    useEffect(() => {
        CheckTopLeftCorrectly()
        CheckTopRightCorrectly()
        CheckBottomLeftCorrectly()
        CheckBottomRightCorrectly()

    }, [RotationTopLeft, RotationTopRight, RotationBottomLeft, RotationBottomRight]);
    
    //Effect for call discovery if all correctly and nothing is select
    useEffect(()=>{
        if (CheckAllCorrectly() === true){
            props.getIfAllCorrectly()
        }
    }, [TopLeftClass, TopRightClass, BottomLeftClass, BottomRightClass])


    return (

        <section className="" >
            <div className="">
                <ClickImage
                    //Passed which img name
                    name={props.name}

                    TopLeftClass={TopLeftClass}
                    TopRightClass={TopRightClass}
                    BottomLeftClass={BottomLeftClass}
                    BottomRightClass={BottomRightClass}

                    AddOrRemoveSelectTopLeft={AddOrRemoveSelectTopLeft}
                    AddOrRemoveSelectTopRight={AddOrRemoveSelectTopRight}
                    AddOrRemoveSelectBottomLeft={AddOrRemoveSelectBottomLeft}
                    AddOrRemoveSelectBottomRight={AddOrRemoveSelectBottomRight}

                    RotationTopLeft={RotationTopLeft}
                    RotationTopRight={RotationTopRight}
                    RotationBottomLeft={RotationBottomLeft}
                    RotationBottomRight={RotationBottomRight}
                />
            </div>

            <div className="">
                <Button name="Left" onClick={handleTurnLeft} />
                <Button name="Right" onClick={handleTurnRight} />
            </div>
        </section >
    )
};

export default Flip;