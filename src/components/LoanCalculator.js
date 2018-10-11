import React from 'react';
import {Layout, Row, Col, Taable, Avatar, List, Card, Icon, Button, Table} from 'antd';

class LoanCalculator extends React.Component {
    render() {
        const {Content} = Layout;
        const columnPdl = [
            {
                title:'Loan Amount',
                dataIndex:'loanAmount',
                key:'loanAmount'
            },
            {
                title:'Pay Period',
                dataIndex:'payPeriod',
                key:'payPeriod'
            },
            {
                title:'All Fees',
                dataIndex:'allFees',
                key:'allFees'
            },
            {
                title:'Payback Amount',
                dataIndex:'paybackAmount',
                key:'paybackAmount'
            }
        ];

        const dataPdl = [
            {
                key:'1',
                loanAmount:'$100',
                payPeriod:'14 days',
                allFees:'$15',
                paybackAmount:'$115'
            },
            {
                key:'2',
                loanAmount:'$200',
                payPeriod:'14 days',
                allFees:'$30',
                paybackAmount:'$230'
            },
            {
                key:'3',
                loanAmount:'$300',
                payPeriod:'14 days',
                allFees:'$45',
                paybackAmount:'$345'
            },
            {
                key:'4',
                loanAmount:'$500',
                payPeriod:'14 days',
                allFees:'$75',
                paybackAmount:'$575'
            },
            {
                key:'5',
                loanAmount:'$1000',
                payPeriod:'14 days',
                allFees:'$150',
                paybackAmount:'$1150'
            },
        ];
        return (
            <Content>
                <Row>
                    <Col>
                        <Table columns={columnPdl} dataSource={dataPdl}></Table>
                    </Col>
                </Row>
            </Content>
        );
    }
}

export default LoanCalculator;