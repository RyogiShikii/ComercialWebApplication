import React from 'react';
import {Layout, Carousel} from 'antd';
import {Row, Col, Card, Icon, Button} from 'antd';

class HomeContent extends React.Component{
    render() {
        const {Content} = Layout;
        const {Meta} = Card;
        return (
            <Content>
                <Row type="flex" justify="space-between">
                    <Col xs={24} sm={24} md={24} lg={24}>
                        <div className='homeBackground'>
                            <h1>Payday Loans and Personal Loans</h1>
                            <h4>Efficency,Flexible and Convenience</h4>
                            <p><Button>Learn More</Button></p>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={7}>
                        <Card
                            className = 'serviceCard_1'
                        >
                            <h3>pdl</h3>
                            <p>some description here</p>
                            <p><Button>Learn more</Button></p>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={7}>
                        <Card
                            className='serviceCard_2'
                        >
                            <h3>Cash cc</h3>
                            <p>some description here</p>
                            <p><Button>Learn more</Button></p>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={7}>
                        <Card
                            className='serviceCard_3'
                        >
                            <h3>others</h3>
                            <p>some description here</p>
                            <p><Button>Learn more</Button></p>
                        </Card>
                    </Col>
                </Row>
            </Content>
        );
    }
}

export default HomeContent;