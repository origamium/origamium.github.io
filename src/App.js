import React, {Component} from 'react';
import styled from 'styled-components';
import icon from './icon.png';

const Root = styled.main`
    padding: 24px;
    font-weight: bolder;
`;

const Header = styled.header`
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    img {
        width: 128px;
        height: 128px;
    }
    
    h1, h2, p {
        margin: 4px;
    }
    
    h1 {
        font-size: 32px;
    }
    
    h2 {
        padding-left: 1em;
        font-size: 24px;
        letter-spacing: 1em;
    }
    
    p {
        padding-top: 8px;
        max-width: 28em;
        text-align: center;
        letter-spacing: .05em;
        line-height: 1.2em;
    }
`;

const Body = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: auto;
`;

const Box = `
    width: 100%;
    margin: 4px;
    padding: 10px;
    text-align: center;
    background-color: whitesmoke;
    border: solid 1px gray;
    user-select: none;
    transition: 0.3s;
    
    :hover {
        background-color: white;
        box-shadow: 8px 4px lightgray;
    }
`;

const List = styled.ul`
    width: 100%;
    max-width: 240px;
    margin: 10px 20px 20px;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    align-items: center;
    
    li {
        ${Box}
    }
`;

const Description = styled.p`
    padding-left: 2em;
    letter-spacing: 2em !important;
    
    & span {
        color: darkred;
    }
`;

class App extends Component {
    openInNewTab = url => e => {
        window.open(url, '_blank').focus();
    };

    listRenderer = (list) => (
        <List>
            {list.map((v, i) => (
                <li key={i} onClick={this.openInNewTab(v.url)}>{v.name}</li>
            ))}
        </List>
    );

    constructor(props) {
        super(props);
        this.state = {
            work: [
                {
                    url: 'https://github.com/origamium',
                    name: 'GitHub',
                },
                {
                    url: 'https://github.com/tsuruclient',
                    name: 'Tsuruclient',
                }
            ],
            social: [
                {
                    url: 'https://twitter.com/arclisp',
                    name: 'Twitter'
                },
                /* {
                    url: 'https://mstdn.jp/@lisp',
                    name: 'mstdn.jp'
                },
                {
                    url: 'https://pawoo.net/@origami',
                    name: 'pawoo.net'
                },
                {
                    url: 'https://freezepeach.xyz/origami',
                    name: 'freezepeach.xyz'
                }, */
            ],
            blog: [
                {
                    url: 'https://dev.to/origamium',
                    name: 'Tech Blog',
                },
                {
                    url: 'https://medium.com/@schemelisp',
                    name: 'Tech Poem'
                },
                {
                    url: 'https://note.mu/garbageable',
                    name: 'Cooking and Poem'
                },
            ],
            help: [
                {
                    url: 'https://www.pixiv.net/fanbox/creator/31344513',
                    name: 'pixiv fanbox',
                },
                {
                    url: 'http://amzn.asia/6TjSltw',
                    name: 'amazon wishlist',
                }
            ]
        }
    }

    render() {
        return (
            <Root>
                <Header>
                    <img src={icon} alt={"ONOUE Origami's icon"}/>
                    <h1>{"ONOUE Origami"}</h1>
                    <h2>尾上 折紙</h2>
                    <Description>
                        <span>{"451"}</span>
                    </Description>
                </Header>
                <hr/>
                <Body>
                    <p>Contact</p>
                    <List>
                        <li style={{userSelect: 'text'}}>onoueorigami@gmail.com</li>
                    </List>

                    <p>Working</p>
                    {this.listRenderer(this.state.work)}

                    <p>Social</p>
                    {this.listRenderer(this.state.social)}

                    <p>Blog</p>
                    {this.listRenderer(this.state.blog)}

                    <p>Donate</p>
                    {this.listRenderer(this.state.help)}
                </Body>
            </Root>
        );
    }
}

export default App;
