import React  from 'react';
import styled from 'styled-components';

const Name = styled.p`
    font-family: 'Lato', sans-serif;
    font-weight: 800;
    font-size: 24px;
    user-select: none;
    letter-spacing: 4px;
    color: grey;
`;

const Front = (props) => (
    <Name>ORIGAMI<br />ONOUE</Name>
);

export default Front;
