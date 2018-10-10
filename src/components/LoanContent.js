import React from 'react';
import {Layout, Row, Col, Avatar, List, Card, Icon, Button} from 'antd';

class LoanContent extends React.Component{
    render() {
        const {Content} = Layout;
        const data = [
            {
              title: 'Ant Design Title 1',
            },
            {
              title: 'Ant Design Title 2',
            },
            {
              title: 'Ant Design Title 3',
            },
            {
              title: 'Ant Design Title 4',
            },
          ];
        return (
            <Content>
                <Row type="flex" justify='center'>
                    <Col sm={16} md={16} lg={16}>
                        <div className="LoanBackground">
                            <h1>The best financial solution you can have</h1>
                            <p>Cashmart provide loans with lowest rate acrossing Canada</p>
                        </div>
                    </Col>
                </Row>
                <Row type="flex" justify='space-around'>
                    <Col sm={16} md={16} lg={8}>
                        <List
                            header={<h3>What do I need to apply</h3>}
                            bordered={true}
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar icon='star'></Avatar>}
                                        title={<p>{item.title}</p>}
                                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                    />
                                </List.Item>
                            )}
                        />
                    </Col>
                    <Col sm={16} md={16} lg={8}>
                        <List
                            header={<h3>What do I need to apply</h3>}
                            bordered={true}
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar icon='star'></Avatar>}
                                        title={<p>{item.title}</p>}
                                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
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