import React from 'react';
import {Layout, Carousel} from 'antd';
import {Row, Col, Card, Icon, Avatar} from 'antd';

class HomeContent extends React.Component{
    render() {
        const {Content} = Layout;
        const {Meta} = Card;
        return (
            <Content>
                <Row gutter={16}>
                    <Col sm={24} md={24} lg={24}>
                        <div className='homeBackground'>
                            <h1>Welcom to the CM</h1>
                        </div>
                    </Col>
                    <Col sm={24} md={12} lg={12}>
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
                    <Col sm={24} md={12} lg={12}>
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