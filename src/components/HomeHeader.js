import React from 'react';
import {Link} from 'react-router-dom';
import {Menu, Dropdown} from 'antd';
import {Row, Col} from 'antd';


class HomeHeader extends React.Component{
    render(){
        return(
            <Row>
                <div className='header'>
                <Menu
                    mode="horizontal"
                >
                    <Menu.SubMenu title='Loan Service'>
                        <Menu.Item key="0">
                            <Link to='loans'>Payday Loan</Link>
                        </Menu.Item>
                        <Menu.Item key="1">
                            <Link to='Rate'>Rate</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to='FAQs'>FAQs</Link>
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu title='Application'>
                        <Menu.Item key='3'>
                            <Link to='/Apply'>Apply Now</Link>
                        </Menu.Item>
                        <Menu.Item key='4'>
                            <Link to='Login'>Login</Link>
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu title='About Company'>
                        <Menu.Item key='6'>
                            option
                        </Menu.Item>
                        <Menu.Item key='7'>
                            option
                        </Menu.Item>
                        <Menu.Item key='8'>
                            option
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.Item>
                        <Link to='Location'>Find Store</Link>
                    </Menu.Item>
                </Menu>
                </div>
            </Row>
        );
    }
}

export default HomeHeader;