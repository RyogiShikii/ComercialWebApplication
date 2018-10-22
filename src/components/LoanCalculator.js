import React from 'react';
import {Layout, Row, Col, Select, Form, Input, Checkbox, Icon, Button, Table} from 'antd';

class LoanCalculator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            frequency:'',
            netPay:'',
            mainSoure:''
        }
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(value){
        this.setState({mainSoure:value});
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
                    <Col sm={24} md={24} lg={18}>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                            </FormItem>
                            <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                            </FormItem>
                            <FormItem>
                            {getFieldDecorator('city', {
                                rules: [{ required: true, message: 'Please input your city' }],
                            })(
                                <Select onChange={this.handleOnChange} style={{ width: 120 }} placeholder='please select your main income source'>
                                <Option value='great'>employed</Option>
                                <Option value='good'>Canada pention Plan</Option>
                                <Option value='decent'>Employed Insurance</Option>
                                <Option value='improve'>Others</Option>
                                </Select>
                            )}
                            </FormItem>
                            <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>Remember me</Checkbox>
                            )}
                            <a className="login-form-forgot" href="">Forgot password</a>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            Or <a href="">register now!</a>
                            </FormItem>
                        </Form>
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