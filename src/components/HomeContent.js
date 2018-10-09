import React from 'react';
import {Layout, Carousel} from 'antd';
import {Row, Col, Card, Icon, Button} from 'antd';

class HomeContent extends React.Component{
    render() {
        const {Content} = Layout;
        const {Meta} = Card;
        return (
            <Content>
                <Row>
                    <Col sm={24} md={24} lg={24}>
                        <div className='homeBackground'>
                            <h1>Payday Loans and Personal Loans</h1>
                            <h4>Efficency,Flexible and Convenience</h4>
                            <p><Button>Learn More</Button></p>
                        </div>
                    </Col>
                    <Col sm={24} md={8} lg={8}>
                        <Card
                            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                        >
                            <Meta
                                title="Payday Loan"
                                description="This is the description"
                            />
                        </Card>
                    </Col>
                    <Col sm={24} md={8} lg={8}>
                        <Card
                            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                        >
                            <Meta
                                title="Cash Cashing"
                                description="This is the description"
                            />
                        </Card>
                    </Col>
                </Row>
            </Content>
        );
    }
}

export default HomeContent;