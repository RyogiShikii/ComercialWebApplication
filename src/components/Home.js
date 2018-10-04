import React, { Component } from 'react';
import {Layout} from 'antd';
import HomeHeader from './HomeHeader';
import MainFooter from './MainFooter';
import HomeContent from './HomeContent';

class Home extends React.Component{
    render() {
        const { Header, Content, Footer, Sider } = Layout;

        return (
            <Layout>
                <Header>
                    <HomeHeader />
                </Header>
                <Layout>
                    <HomeContent />
                </Layout>
                <Footer>
                    <MainFooter />
                </Footer>
            </Layout>
        );
    }
}

export default Home;
