import React from 'react';
import {Menu, Dropdown} from 'antd';


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
            <div className='header'>
                <div className="logo"></div>
                <Menu
                    mode='horizontal'
                >
                    <Menu.Item key="1">
                        <Dropdown overlay={headerMenu}>
                            <a className="ant-dropdown-link" href="#">Payday Loan</a>
                        </Dropdown>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Dropdown overlay={headerMenu}>
                            <a className="ant-dropdown-link" href="#">Cheque Cashing</a>
                        </Dropdown>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Dropdown overlay={headerMenu}>
                            <a className="ant-dropdown-link" href="#">Western Union</a>
                        </Dropdown>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default HomeHeader;