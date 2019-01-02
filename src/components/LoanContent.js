import React from 'react';
import {Layout, Row, Col, Avatar, List, Card, Icon, Button} from 'antd';

class LoanContent extends React.Component{
    render() {
        const {Content} = Layout;
        const infoData = [
            {
                title: 'Basic Info',
                description: 'A Payday Loan is a small sum loan, typically for a few hundred dollars to be repaid after a short period of time-usually,which can be a useful way to meet temporary short-term borrowing needs'
            },
            {
                title: 'Loan Terms',
                description: '2 to 62 days'
            },
            {
                title: 'Loan Amount',
                description: 'up to $1500'
            },
            {
                title: 'Payback Flexibility',
                description: 'single payment(multiple payments only in BC)'
            },
          ];
        const qulificationData = [
            {
                title: 'You must be 19 years or older',
                description: ''
            },
            {
                title: 'A valid government issued ID',
                description: 'such as Drivers license, Passport and PR card etc.'
            },
            {
                title: 'Up-to-date bank statement',
                description: 'we need at least one month transactions history from the bank statement you provide'
            },
            {
                title: 'A void cheque or Pre-Authorized Debit Form',
                description: 'This document should show all your bank account infomation'
            },
        ];
        return (
            <Content>
                <Row type="flex" justify='center'>
                    <Col xs={16} sm={16} md={16} lg={16} className='loanContentHeader'>
                            <h1>The best financial solution you can have</h1>
                            <p>Cashmart provides loans with lowest rate acrossing Canada</p>
                    </Col>
                </Row>
                <Row type="flex" justify='space-around'>
                    <Col xs={16} sm={16} md={16} lg={8}>
                        <List
                            header={<h3>What is a Payday Loan</h3>}
                            bordered={true}
                            itemLayout="horizontal"
                            dataSource={infoData}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar icon='star'></Avatar>}
                                        title={<p>{item.title}</p>}
                                        description={<p>{item.description}</p>}
                                    />
                                </List.Item>
                            )}
                        />
                    </Col>
                    <Col xs={16} sm={16} md={16} lg={8}>
                        <List
                            header={<h3>What do I need to apply</h3>}
                            bordered={true}
                            itemLayout="horizontal"
                            dataSource={qulificationData}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar icon='star'></Avatar>}
                                        title={<p>{item.title}</p>}
                                        description={<p>{item.description}</p>}
                                    />
                                </List.Item>
                            )}
                        />
                    </Col>
                </Row>
            </Content>
        );
    }
}

export default LoanContent;