import Styled from "styled-components";

const ContainerPin = Styled.div`
    margin: 2% auto;
    width: 384px;
    height: 234px;
    margin: 25px;
    position:relative;
    background-color: rgba(255, 255, 255, 0.5);
    display: inline-block;
`

const ContainerPinBox = Styled.div`
    width: 342px;
    height: 192px;
    margin: 20px;
    background-color: rgba(255, 255, 255, 1);
`

const ContainerPinBoxImg = Styled.img`
    width: 342px;
    height: 192px;
`

export {ContainerPin, ContainerPinBox, ContainerPinBoxImg};