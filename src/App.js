import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Icon, Dropdown, Button, Carousel} from 'antd';
import HomeHeader from './components/HomeHeader';
import HomeContent from './components/HomeContent';
import MainFooter from './components/MainFooter';
import LoanContent from './components/LoanContent';
import './App.css';

class App extends React.Component {
  render() {
    const {Header, Content, Footer} = Layout;
    return (
      <Router>
        <div>
          <Header>
            <HomeHeader />
          </Header>
          <Route exact path="/" component={HomeContent} />
          <Route path="/loans" component={LoanContent} />
          <Footer>
            <MainFooter />
          </Footer>
        </div>
      </Router>
    );
  }
}


export default App;