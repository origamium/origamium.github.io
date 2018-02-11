import React, { Component } from 'react';
import styled from 'styled-components';

const Body = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    background: azure;
    width: 100px;
    height: 100px;
`;

class App extends Component {
    render() {
        return (
            <Body>
                <Container>
                </Container>
            </Body>
        );
    }
}

export default App;
