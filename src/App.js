import React, {Component} from 'react';
import styled from 'styled-components';
import icon from './icon.png';

const Root = styled.main`
    padding: 24px;
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
    border: solid 1px gray;
    user-select: none;
    transition: 0.3s;
    
    :hover {
        background-color: lightgray;
        box-shadow: 2px 5px gray;
    }
`;

const List = styled.ul`
    width: 100%;
    max-width: 320px;
    margin: 20px;
    margin-top: 10px;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    align-items: center;
    
    li {
        ${Box}
    }
`;



class App extends Component {
    openInNewTab = url => e => {
        window.open(url, '_blank').focus();
    };
    listRenderer = (list) => (
        <List>
            {list.map((v, i) => (
                <li key={i} onClick={this.openInNewTab('https://' + v.url)}>{v.name}</li>
            ))}
        </List>
    );

    constructor(props) {
        super(props);
        this.state = {
            work: [
                {
                    url: 'github.com/origamium',
                    name: 'github.com',
                },
                {
                    url: 'github.com/tsuruclient',
                    name: 'Tsuruclient',
                }
            ],
            social: [
                {
                    url: 'twitter.com/arclisp',
                    name: 'Twitter'
                },
                {
                    url: 'mstdn.jp/@lisp',
                    name: 'mstdn.jp'
                },
                {
                    url: 'pawoo.net/@origami',
                    name: 'pawoo.net'
                },
                {
                    url: 'freezepeach.xyz/origami',
                    name: 'freezepeach.xyz'
                },
            ],
            blog: [
                {
                    url: 'dev.to/origamium',
                    name: 'dev.to tech blog',
                },
                {
                    url: 'medium.com/@schemelisp',
                    name: 'medium.com tech poem'
                },
                {
                    url: 'note.mu/garbageable',
                    name: 'Cook, Poem'
                },
            ],
            help: [
                {
                    url: 'www.pixiv.net/fanbox/creator/31344513',
                    name: 'pixiv fanbox',
                },
                {
                    url: 'amzn.asia/6TwgTYR',
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
                    <p>
                        {"Frontend(React, Redux) Programmer, Computer Science, 3D modeling, illustration, and Cooking."}
                    </p>
                </Header>
                <hr/>
                <Body>
                <React.Fragment>
                    <p>Contact</p>
                    <List>
                        <li style={{userSelect: 'text'}}>onoueorigami@gmail.com</li>
                    </List>

                    <p>Working in</p>
                    {this.listRenderer(this.state.work)}

                    <p>Social</p>
                    {this.listRenderer(this.state.social)}

                    <p>Blog</p>
                    {this.listRenderer(this.state.blog)}

                    <p>Donate</p>
                    {this.listRenderer(this.state.help)}
                </React.Fragment>
                </Body>
            </Root>
        );
    }
}

export default App;
