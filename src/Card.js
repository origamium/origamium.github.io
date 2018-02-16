import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Front from './Front';
import Back from './Back';

const Body = styled.div`
    width: 459px;
    height: 277px;
    background: #B4B4B4;
    border-radius: 2px;
    padding: 6px;
    filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.6));
    transition: all 0.2s ease-out 0s;
    
    &:hover {
        filter: drop-shadow(4px 4px 4px rgba(0,0,0,0.6));
    }
`;

class Card extends PureComponent {
    state = {
        alt: true
    };

    handleCardClick = () => {
        this.setState({
            alt: !this.state.alt
        })
    };

    render() {
        return (
            <Body onClick={this.handleCardClick}>
            {this.state.alt ? <Front/> : <Back/>}
            </Body>
        );
    }
}

export default Card;
