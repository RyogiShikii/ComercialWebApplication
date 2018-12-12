import React from 'react';
import {Layout, Row, Col, Select, Avatar, List, Card, Icon, Button, Table} from 'antd';
import MapWrapper from './MapWrapper';
import {DirectionsRenderer} from 'react-google-maps';
 
const {maps} = window.google;

class StoreLocation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Toggle:false
        }
    }
    render() {
        const {Content} = Layout;
        const Option = Select.Option;
        const Toggle = this.state.Toggle;
        let map;
        if(Toggle){
            map = (
                        <MapWrapper
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `400px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                            defaultZoom={12}
                            defaultCenter={{ lat: 41.85073, lng: -87.65126 }}
                        >
                            <DirectionsRenderer directions={this.state.directions}></DirectionsRenderer>
                        </MapWrapper>
            )
        }

        return (
            <Content>
                <Row>
                    <Col>
                        {map}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Select onChange={}>
                            <Option value=''>10392 King George Blvd, Surrey, BC</Option>
                            <Option value=''>2245 Commercial Drive, Vancouver, BC</Option>
                        </Select>
                    </Col>
                </Row>
            </Content>
        );
    }
}

export default StoreLocation;