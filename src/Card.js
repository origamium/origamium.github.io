import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Front from './Front';

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
    render() {
        return (
            <Body>
                <Front/>
            </Body>
        );
    }
}

export default Card;
