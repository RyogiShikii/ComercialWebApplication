import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout} from 'antd';
import HomeHeader from './components/HomeHeader';
import HomeContent from './components/HomeContent';
import MainFooter from './components/MainFooter';
import LoanContent from './components/LoanContent';
import LoanCalculator from './components/LoanCalculator';
import FAQ from './components/FAQ'; 
import Login from './components/Login';
import Application from './components/Application';
import DirectionMap from './components/DirectionMap';
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
          <Route path="/Rates" component={LoanCalculator} />
          <Route path='/FAQs' component={FAQ} />
          <Route path='/Login' component={Login} />
          <Route path='/Apply' component={Application} />
          <Route path='/Location' component={DirectionMap} />
          <Footer>
            <MainFooter />
          </Footer>
        </div>
      </Router>
    );
  }
}


export default App;