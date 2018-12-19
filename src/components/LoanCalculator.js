import React from 'react';
import {Layout, Row, Col, Select, Form, Input, Checkbox, Icon, Button, Table} from 'antd';

class LoanCalculator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            employmentStatus:'',
            netPay:'',
            history:''
        }
        this.handleEmploymentStatus = this.handleEmploymentStatus.bind(this);
        this.handleNetPay = this.handleNetPay.bind(this);
        this.handleHistory = this.handleHistory.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            const {employmentStatus,netPay,history} = this.state;
            const tem = [employmentStatus,netPay,history];
            const score = tem.map(item => {
                return parseInt(item)
            });
            //import lodash sum here
          }
        });
    }

    handleEmploymentStatus(value){
        this.setState({employmentStatus:value});
    }

    handleNetPay(value){
        this.setState({netPay:value});
    }

    handleHistory(value){
        this.setState({history:value});
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const {Content} = Layout;
        const Option = Select.Option;
        const FormItem = Form.Item;
        const columnPdl = [
            {
                title:'Loan Amount',
                dataIndex:'loanAmount',
                key:'loanAmount',
                align:'center'
            },
            {
                title:'Pay Period',
                dataIndex:'payPeriod',
                key:'payPeriod',
                align:'center'
            },
            {
                title:'All Fees',
                dataIndex:'allFees',
                key:'allFees',
                align:'center'
            },
            {
                title:'Payback Amount',
                dataIndex:'paybackAmount',
                key:'paybackAmount',
                align:'center'
            }
        ];
        const columnApr = [
            {
                title:'Loan Term(7 days)',
                dataIndex:'weeklyPay',
                key:'weeklyPay',
                align:'center'
            },
            {
                title:'Loan Term(14 days)',
                dataIndex:'biweeklyPay',
                key:'biweeklyPay',
                align:'center'
            },
            {
                title:'Loan Term(30 days)',
                dataIndex:'monthlyPay',
                key:'monthlyPay',
                align:'center'
            }
        ]

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
        const dataApr = [
            {
                key:'1',
                weeklyPay:'782.14%',
                biweeklyPay:'391.07%',
                monthlyPay:'182.50%'
            },
            {
                key:'2',
                weeklyPay:'782.14%',
                biweeklyPay:'391.07%',
                monthlyPay:'182.50%'
            },
            {
                key:'3',
                weeklyPay:'782.14%',
                biweeklyPay:'391.07%',
                monthlyPay:'182.50%'
            }
        ];
    
        return (
            <Content>
                <Row type="flex" justify="space-around">
                    <Col sm={24} md={24} lg={10}>
                        <h4>Payday Loan Eligibility Calculator</h4>
                        <Form onSubmit={this.handleSubmit} className="calculator-form">
                            <FormItem>
                            {getFieldDecorator('mainsource', {
                                rules: [{ required: true, message: 'Please select your employment status' }],
                            })(
                                <Select onChange={this.handleEmploymentStatus} placeholder='please select your employment status'>
                                <Option value='great'>I'm employed by a company</Option>
                                <Option value='good'>I'm retired and have Canada pention Plan</Option>
                                <Option value='decent'>I'm on Employed Insurance currently</Option>
                                <Option value='improve'>Others</Option>
                                </Select>
                            )}
                            </FormItem>
                            <FormItem>
                            {getFieldDecorator('amount', {
                                rules: [{ required: true, message: 'Please select your average income amount' }],
                            })(
                                <Select onChange={this.handleNetPay} placeholder='please select your average income amount every two weeks'>
                                <Option value='great'>less than 1000</Option>
                                <Option value='good'>1000-1500</Option>
                                <Option value='decent'>1500-2000</Option>
                                <Option value='improve'>2000+</Option>
                                </Select>
                            )}
                            </FormItem>
                            <FormItem>
                            {getFieldDecorator('status', {
                                rules: [{ required: true, message: 'Please select your loan status' }],
                            })(
                                <Select onChange={this.handleHistory} placeholder='please select if you have loan with other company'>
                                <Option value='great'>Yes,I have loan with other comany</Option>
                                <Option value='good'>No, this is my first Payday Loan</Option>
                                </Select>
                            )}
                            </FormItem>
                            <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Calculate
                            </Button>
                            <a className="login-form-forgot" href="">Need more?Try personal solution</a>
                            </FormItem>
                        </Form>
                    </Col>
                    <Col sm={24} md={24} lg={8}>
                        there will be a table
                    </Col>
                </Row>
                <Row type="flex" justify="space-around">
                    <Col sm={24} md={24} lg={18}>
                        <Table columns={columnPdl} dataSource={dataPdl}></Table>
                        <Table columns={columnApr} dataSource={dataApr}></Table>
                    </Col>
                </Row>
            </Content>
        );
    }
}

const Calculator = Form.create()(LoanCalculator);
export default Calculator;