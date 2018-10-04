import React from 'react';
import {Layout, Carousel} from 'antd';

class HomeContent extends React.Component{
    render() {
        const Content = Layout;
        return (
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                <Carousel autoplay>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
            </Content>
        );
    }
}

export default HomeContent;