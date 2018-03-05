import React  from 'react';
import styled from 'styled-components';

const Body = styled.div`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    
    ::-webkit-scrollbar {
        width: 6px;
    }
    ::-webkit-scrollbar-track {
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgba(50, 50, 50, .5);
        border-radius: 10px;
    }
`;

const Text = styled.div`
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 18px;
    user-select: none;
    letter-spacing: 1px;
    color: grey;
    
    & > pre > a {
        &:link, &:visited {
            color: grey;
        }
    }
`;
const content =
<pre>{`{
    "name": "ONOUE Origami",
    "github": "`}<a href="https://github.com/FirstStar">FirstStar</a>{`",
    "social": [
        {"twitter.com": "`}<a href="https://twitter.com/arclisp">arclisp</a>{`"},
        {"freezepeach.xyz": "`}<a href="https://freezepeach.xyz/origami">origami</a>{`"},
        {"pawoo.net": "`}<a href="https://pawoo.net/@origami">origami</a>{`"},
        {"mstdn.jp": "`}<a href="https://mstdn.jp/@lisp">lisp</a>{`"}
    ],
    "blog": [
        {"note.mu": "`}<a href="https://note.mu/garbageable">garbageable</a>{`"},
        {"dev.to": "`}<a href="https://dev.to/firststar">firststar</a>{`"},
        {"medium.com": "`}<a href="https://medium.com/@schemelisp">@schemelisp</a>{`"}
    ]
}`}</pre>;


const Front = (props) => (
    <Body>
    <Text>
        {content}
    </Text>
    </Body>
);

export default Front;
