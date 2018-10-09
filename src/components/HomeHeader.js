import React from 'react';
import {Menu, Dropdown} from 'antd';
import {Row, Col} from 'antd';


class HomeHeader extends React.Component{
    render(){
        const headerMenu = (
            <Menu>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
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
                                <Dropdown overlay={headerMenu}>
                                    <a className="ant-dropdown-link">Payday Loan</a>
                                </Dropdown>
                            </Menu.Item>
                        </Col>
                        <Col sm={24} md={6} lg={3}>
                            <Menu.Item key="2">
                                <Dropdown overlay={headerMenu}>
                                    <a className="ant-dropdown-link">Cheque Cashing</a>
                                </Dropdown>
                            </Menu.Item>
                        </Col>
                        <Col sm={24} md={6} lg={3}>
                            <Menu.Item key="3">
                                <Dropdown overlay={headerMenu}>
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