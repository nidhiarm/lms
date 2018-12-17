import App, { Container } from "next/app";
import React from "react";
// import Head from "next/head";
// import Link from "next/link";

export default class MyApp extends App{
   
    render() {
        const { Component, pageProps } = this.props;
        return <Container>
            <Component {...pageProps}  />
        </Container>
    }
}