import styled from 'styled-components'
import data from '../components/data'

const Styled = {
    Main: styled.main`
        margin: 1em 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        hr {
            width: 60vw;
        }
    `,
    Header: styled.header`
        display: flex;
        flex-direction: column;
        align-items: center;
        * {
            margin: 0;
            padding: 0;
        }
        img {
            width: 14vw;
            max-width: 8em;
        }
    `,
    Article: styled.article`
        text-align: center;
        
        h2 {
            margin: 0;
        }
        
        p {
            margin: 0.5em 0;
            padding: 0.3em 0;
            text-decoration: none;
            width: 220px;
            background-color: #f4f4f4;
            border: solid 1px gray;
            border-radius: 2px;
        }
    `,
}

const open = (url) => (event) => {
    event.preventDefault();
    window.open(url, '_blank')
}

export default () => {
    return (
        <Styled.Main>
            <Styled.Header>
                <img src={"../static/icon.png"} alt={"origamium icon"} onClick={open('https://451.origamium.net')} />
                <h1>{"尾上 折紙"}</h1>
                <h2>{"ONOUE Origami"}</h2>
            </Styled.Header>
            <hr />
            <Styled.Article>
                <section>
                    <h2>{"Email"}</h2>
                    <p style={{cursor: "text"}}>
                        {"onoueorigami@gmail.com"}
                    </p>
                </section>
                {Object.keys(data).map((v, i) => (
                    <section key={i}>
                        <h2>{v}</h2>
                        {data[v].map((v, j) => (
                            <p key={i.toString()+j} onClick={open(v.url)} style={{cursor: "pointer"}}>
                                {v.name}
                            </p>
                        ))}
                    </section>
                ))}
            </Styled.Article>
        </Styled.Main>
    )
}
