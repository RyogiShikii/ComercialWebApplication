import React from 'react';
import {Layout, Row, Col, Taable, Avatar, List, Card, Icon, Button, Table} from 'antd';

class StoreLocation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            address:'',
            phone:'',
            email:'',
            hours:'',
            map:''
        }
    }
    render() {
        const {Content} = Layout;
        return (
            <Content>
                <Row>
                    <Col>
                        <Table
                            columns={}
                            dataSource={} 
                        />
                    </Col>
                </Row>
            </Content>
        );
    }
}

export default StoreLocation;