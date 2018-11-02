import React from 'react';
import {Collapse, Row, Col} from 'antd';

class FAQ extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: []
        }
    }
    
    componentDidMount(){
        fetch('https://5b3dae8d95bf8d0014a1d78a.mockapi.io/api/v1/FAQs')
        .then(response => response.json())
        .then(data => this.setState({info:data}));
    }

    render() {
        const Panel = Collapse.Panel;
        const collapse = this.state.info.map(item => (
            <Panel header={item.header} key={item.key}>
                <p>{item.text}</p>
            </Panel>
        ));
        return (
            <Row type="flex" justify="space-around">
                <Col sm={24} md={24} lg={20}>
                <Collapse accordion>
                    {collapse}
                </Collapse>
                </Col>
            </Row>
        );
    }
}

export default FAQ;