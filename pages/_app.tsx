import App, { Container } from "next/app";
import React from "react";
import {
    Layout, Menu, Breadcrumb,
  } from 'antd';
  import 'antd/dist/antd.less';
const { Header, Content, Footer} = Layout;
import Sidebar from "../components/sidebar";
// import Head from "next/head";
// import Link from "next/link";

export default class MyApp extends App{
   
    render() {
        const { Component, pageProps } = this.props;
        return  <Container>
            <Layout>
                <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                   
                </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{ padding: '24px 0', background: '#fff' }}>
                    <Sidebar />
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    <Component {...pageProps}  />
                    </Content>
                </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
                </Footer>
        </Layout> 
      </Container>
      
    }
}