import Styled from "styled-components";

const Container = Styled.div`
    margin: 1% auto;
    width: 1200px;
    border: solid 3px #000000;
    padding: 25px;
    border-radius: 1%;
    background-color: rgba(255,255,255, 0.1);
    &:hover {
         background-color: rgba(46, 49, 49, 1);
    }
`

const ContainerCap = Styled.div`
    font-size: 22px;
    text-align: center;
    color: white;
`

const ContainerText = Styled.div`
    font-size: 22px;
    text-align: left;
    color: white;
`

const ContainerBoxImg = Styled.img`
    border-radius: 1%;
`

export {Container, ContainerCap, ContainerText, ContainerBoxImg};