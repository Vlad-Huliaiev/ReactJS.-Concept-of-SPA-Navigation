import React from 'react';
import {ContainerPin, ContainerPinBox, ContainerPinBoxImg} from "./pinStyle.js";

const Pin = (props) => {
    return (
            <ContainerPin>
                <ContainerPinBox>
                    <ContainerPinBoxImg src={props.image} alt=""/>
                </ContainerPinBox>
            </ContainerPin>
    );
}

export default Pin;