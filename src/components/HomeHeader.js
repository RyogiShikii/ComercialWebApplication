import React from 'react';
import {Link} from 'react-router-dom';
import {Menu, Dropdown} from 'antd';
import {Row, Col} from 'antd';


class HomeHeader extends React.Component{
    render(){
        const headerMenu1 = (
            <Menu>
              <Menu.Item>
                <Link to="/Loans">Loans</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/Rates">Rates</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to='/FAQs'>FAQs</Link>
              </Menu.Item>
            </Menu>
          );

        const headerMenu2 = (
            <Menu>
              <Menu.Item>
                <Link to="/Login">Register</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/Apply">Apply</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to='/Location'>Location</Link>
              </Menu.Item>
            </Menu>
          );
        
        const headerMenu3 = (
            <Menu>
              <Menu.Item>
                <Link to="/Loans">Loans</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/Rates">Rates</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to='/FAQs'>FAQs</Link>
              </Menu.Item>
            </Menu>
          );

        return(
            <Row>
                <div className='header'>
                    <Menu
                        mode='horizontal'
                    >
                        <Col sm={24} md={6} lg={3}>
                            <Menu.Item key="1">
                                <Dropdown overlay={headerMenu1}>
                                    <a className="ant-dropdown-link">Payday Loan</a>
                                </Dropdown>
                            </Menu.Item>
                        </Col>
                        <Col sm={24} md={6} lg={3}>
                            <Menu.Item key="2">
                                <Dropdown overlay={headerMenu2}>
                                    <a className="ant-dropdown-link">Cheque Cashing</a>
                                </Dropdown>
                            </Menu.Item>
                        </Col>
                        <Col sm={24} md={6} lg={3}>
                            <Menu.Item key="3">
                                <Dropdown overlay={headerMenu3}>
                                    <a className="ant-dropdown-link">Western Union</a>
                                </Dropdown>
                            </Menu.Item>
                        </Col>
                    </Menu>
                </div>
            </Row>
        );
    }
}

export default HomeHeader;