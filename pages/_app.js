import App, { Container } from 'next/app'
import React from 'react'
import Head from 'next/head'

class Origamium extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps({ ctx })
        }
        return { pageProps }
    }

    render () {
        const { Component, pageProps } = this.props
        return (
            <Container>
                <Head>
                    <title>Origamium</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
                <Component {...pageProps} />
            </Container>
        )
    }
}

export default Origamium
