import React from 'react';
import {Layout, Row, Col, Avatar, List, Card, Icon, Button} from 'antd';

class LoanContent extends React.Component{
    render() {
        const {Content} = Layout;
        const PayDayLoan = [
            {
                title: 'Basic Information',
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
        const PersonalLoan = [
            {
                title: 'Basic Information',
                description: 'In CashMart, we offer large amount loan for individuals.pleae contact us and our loan specialist will help you!'
            },
            {
                title: 'Loan Terms',
                description: 'basically 1 year bur can be flexible'
            },
            {
                title: 'Loan Amount',
                description: 'Please call 604-688-6881 for details'
            },
            {
                title: 'Do I need a guarantee',
                description: 'Yes.We need you to offer a gurantee.Please contact for more information'
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
                            dataSource={PayDayLoan}
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
                            dataSource={PersonalLoan}
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