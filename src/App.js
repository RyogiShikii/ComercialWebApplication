import React, { Component } from 'react';
import { Layout, Menu, Icon, Dropdown, Button, Carousel} from 'antd';
import HomeHeader from './components/HomeHeader';
import HomeContent from './components/HomeContent';
import MainFooter from './components/MainFooter';
import LoanContent from './components/LoanContent';
import './App.css';

class App extends React.Component{
  render(){
    const {Header, Content, Footer} = Layout;
    return(
      <Layout>
          <Header>
            <HomeHeader />
          </Header>
          <HomeContent />
          <LoanContent />
          <Footer>
            <MainFooter />
          </Footer>
      </Layout>
    );
  }
}

export default App;

