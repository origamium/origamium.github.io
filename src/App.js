import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Card from './Card';

const Body = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #D7D7D7;
`;

class App extends PureComponent {
    render() {
        return (
            <Body>
                <Card />
            </Body>
        );
    }
}

export default App;
