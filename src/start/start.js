import React from 'react';
import {Container, ContainerCap, ContainerText, ContainerBoxImg} from "./startStyleComponent.js";
import mandalorian from '../img/mandalorian.jpg';

const Start = () => {
    return (
            <Container>
                <ContainerCap>
                    <h2>The Mandalorian</h2>
                </ContainerCap>
                <div>
                    <ContainerBoxImg src={mandalorian} alt=""/>
                </div>
                <ContainerText>
                    <h4>
                        The new season of The Mandalorian starts streaming Friday, October 30, only on Disney+.
                    </h4>
                    <h4>
                        The Mandalorian and the Child continue their journey, facing enemies and rallying allies as they make their way through a dangerous galaxy in the tumultuous era after the collapse of the Galactic Empire. “The Mandalorian” stars Pedro Pascal, Gina Carano, Carl Weathers and Giancarlo Esposito. Directors for the new season include Jon Favreau, Dave Filoni, Bryce Dallas Howard, Rick Famuyiwa, Carl Weathers, Peyton Reed and Robert Rodriguez. Showrunner Jon Favreau serves as executive producer along with Dave Filoni, Kathleen Kennedy and Colin Wilson, with Karen Gilchrist serving as co-executive producer.
                    </h4>
                </ContainerText>
            </Container>
    );
}
export default Start;