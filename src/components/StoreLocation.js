import React from 'react';
import {Layout, Row, Col, Select, Input, List, Card, Icon, Button, Table} from 'antd';
import MapWrapper from './MapWrapper';
import {DirectionsRenderer, Marker, InfoWindow} from 'react-google-maps';
 
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
                            defaultZoom={18}
                            defaultCenter={{ lat: 41.85073, lng: -87.65126 }}
                        >
                            <DirectionsRenderer directions={this.state.directions}></DirectionsRenderer>
                        </MapWrapper>
            )
        }else{
            map = (
                <MapWrapper
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    defaultZoom={16}
                    defaultCenter={{ lat: 49.191362, lng: -122.844795 }}
                >
                    <Marker position={{ lat: 49.191362, lng: -122.844795 }}>
                        <InfoWindow>
                            <div>
                                <h4>CashMart Surrey</h4>
                                <p>10392 King George Blvd, Surrey, BC</p>
                            </div>
                        </InfoWindow>
                    </Marker>
                </MapWrapper>
            )
        }

        return (
            <Content>
                <Row type="flex" justify="space-around">
                    <Col sm={24} md={24} lg={5}>
                        <h2>Please Select Your City:</h2>
                        <Select defaultValue="vancouver" style={{width:'18em'}}> 
                            <Option value="surrey">Surrey</Option>
                            <Option value="vancouver">Vancouver</Option>
                        </Select>
                        <br/>
                        <Input placeholder='please input your postcode or address'></Input>
                        <Button type='primary'>Find Store</Button>
                    </Col>
                    <Col sm={24} md={24} lg={15}>
                        {map}
                    </Col>
                </Row>
            </Content>
        );
    }
}

export default StoreLocation;