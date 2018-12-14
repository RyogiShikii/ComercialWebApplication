import React from 'react';
import {Layout, Row, Col, Select, Input, List, Card, Icon, Button, Table} from 'antd';
import MapWrapper from './MapWrapper';
import {DirectionsRenderer, Marker, InfoWindow} from 'react-google-maps';
 
const {maps} = window.google;

class StoreLocation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            city:'surrey',
            directions:undefined,
            input:undefined
        }
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleDirection = this.handleDirection.bind(this);
    }

    handleCityChange(value){
        this.setState({
            city:value
        });
    }

    handleInput(e){
        e.preventDefault();
        this.setState({input:e.target.value})
    }

    handleDirection(){
        const input = this.state.input;
        const des = (this.state.city == 'vancouver')? '2245 commercial drive,vancouver,bc' : '10392 king george blvd,surrey,bc';
        const DirectionsService = new maps.DirectionsService();
        DirectionsService.route({
            origin:input,
            destination:des,
            travelMode: maps.TravelMode.DRIVING
        },(result,status) => {
            if(status === maps.DirectionsStatus.OK){
                this.setState({directions:result})
            }else{
                console.log('error')
            }
        });
    }

    render() {
        const {Content} = Layout;
        const Option = Select.Option;
        const city = this.state.city;
        let map;
        if(city == 'vancouver'){
            map = (
                        <MapWrapper
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `25em` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                            defaultZoom={18}
                            defaultCenter = {{lat: 49.264435,lng: -123.069900}}
                        >
                            <Marker position={{ lat: 49.264435, lng: -123.069900 }}>
                                <InfoWindow>
                                    <div>
                                        <h4>CashMart Surrey</h4>
                                        <p>2245 Commercial Drive,Vancouver,BC</p>
                                    </div>
                                </InfoWindow>
                            </Marker>
                            <DirectionsRenderer directions={this.state.directions}></DirectionsRenderer>
                        </MapWrapper>
            )
        }else{
            map = (
                <MapWrapper
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `25em` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    defaultZoom={16}
                    defaultCenter={{lat: 49.191362, lng:-122.844795}}
                >
                    <Marker position={{ lat: 49.191362, lng: -122.844795 }}>
                        <InfoWindow>
                            <div>
                                <h4>CashMart Surrey</h4>
                                <p>10392 King George Blvd, Surrey, BC</p>
                            </div>
                        </InfoWindow>
                    </Marker>
                    <DirectionsRenderer directions={this.state.directions}></DirectionsRenderer>
                </MapWrapper>
            )
        }

        return (
            <Content>
                <Row type="flex" justify="space-around">
                        <Col xs={24} sm={24} md={24} lg={5}>
                        <h2>Please Select Your City:</h2>
                        <Select defaultValue="surrey" style={{width:'18em'}} onChange={this.handleCityChange}> 
                            <Option value="surrey">Surrey</Option>
                            <Option value="vancouver">Vancouver</Option>
                        </Select>
                        <br/>
                        <Input placeholder='please input your postcode or address' onChange={this.handleInput}></Input>
                        <Button type='primary' onClick={this.handleDirection}>Find Store</Button>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={15}>
                        {map}
                    </Col>
                </Row>
            </Content>
        );
    }
}

export default StoreLocation;