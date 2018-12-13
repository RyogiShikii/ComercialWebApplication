import React from 'react';
import {Collapse, Row, Col, Layout, Form, Input, Tooltip, Icon, Select, Checkbox, Button, AutoComplete} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    }
    
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
    
    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }
    
    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
            callback();
    }
    
    handleWebsiteChange = (value) => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    }

    render() {
        const Panel = Collapse.Panel;
        const {Content} = Layout;
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        const tailFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 16,
                offset: 8,
              },
            },
          };
      
          const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
          ));

        return (
            <Content>
                <Row type="flex" justify="space-around" className='apllicationForm'>
                    <Col sm={24} md={24} lg={16}>
                        <Form onSubmit={this.handleSubmit}>
                            <Collapse defaultActiveKey={['1']}>
                                <Panel header="Personal Infomation" key="1">
                                    <Row gutter={8}>
                                        <Col sm={24} md={24} lg={8}>
                                        <Select defaultValue="lucy">
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="disabled" disabled>Disabled</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                        </Select>
                                            <FormItem label="Last Name">
                                                {getFieldDecorator('lastName', {
                                                    rules: [{
                                                    required: true, message: 'Please input your last name',
                                                    }],
                                                })(
                                                    <Input />
                                                )}
                                            </FormItem>
                                        </Col>
                                        <Col sm={24} md={24} lg={8}>
                                            <FormItem label="First Name">
                                                {getFieldDecorator('firstName', {
                                                    rules: [{
                                                    required: true, message: 'Please input your first name',
                                                    }],
                                                })(
                                                    <Input />
                                                )}
                                            </FormItem>
                                        </Col>
                                        <Col sm={24} md={24} lg={8}>
                                            <FormItem label="Birth Day">
                                                {getFieldDecorator('birthDay', {
                                                    rules: [{
                                                    required: true, message: 'Please input your birth day'
                                                    }],
                                                })(
                                                    <Input placeholder='YYYY-MM-DD'/>
                                                )}
                                            </FormItem>
                                        </Col>
                                    </Row>
                                    <FormItem label="E-mail">
                                        {getFieldDecorator('email', {
                                            rules: [{
                                            type: 'email', message: 'The input is not valid E-mail!',
                                            }, {
                                            required: true, message: 'Please input your E-mail!',
                                            }],
                                        })(
                                            <Input/>
                                        )}
                                    </FormItem>
                                    <FormItem label="Password">
                                        {getFieldDecorator('password', {
                                            rules: [{
                                            required: true, message: 'Please input your password!',
                                            }, {
                                            validator: this.validateToNextPassword,
                                            }],
                                        })(
                                            <Input type="password" />
                                        )}
                                    </FormItem>
                                    <FormItem label="Confirm Password">
                                        {getFieldDecorator('confirm', {
                                            rules: [{
                                            required: true, message: 'Please confirm your password!',
                                            }, {
                                            validator: this.compareToFirstPassword,
                                            }],
                                        })(
                                            <Input type="password" onBlur={this.handleConfirmBlur} />
                                        )}
                                    </FormItem>
                                    <FormItem label='Register me a account'>
                                        {getFieldDecorator('register')(
                                            <Checkbox>I have read the <a href="">agreement</a></Checkbox>
                                        )}
                                    </FormItem>
                                </Panel>
                                <Panel header="Employment Information" key="2">
                                    <FormItem
                                        label={(
                                            <span>
                                            Employer&nbsp;
                                            <Tooltip title="You can input your company's name">
                                                <Icon type="question-circle-o" />
                                            </Tooltip>
                                            </span>
                                        )}
                                    >
                                        {getFieldDecorator('employer', {
                                            rules: [{ required: true, message: 'Please input your employer!', whitespace: true }],
                                        })(
                                            <Input />
                                        )}
                                    </FormItem>
                                    <FormItem label='Net Income'>
                                        {getFieldDecorator('netIncome', {
                                            rules: [{ required: true, message: 'Please select your average income amount' }],
                                        })(
                                            <Select placeholder='please select your average income amount every two weeks'>
                                                <Option value='great'>less than 1000</Option>
                                                <Option value='good'>1000-1500</Option>
                                                <Option value='decent'>1500-2000</Option>
                                                <Option value='improve'>2000+</Option>
                                            </Select>
                                        )}
                                    </FormItem>
                                    <FormItem label="Employer Phone Number">
                                        {getFieldDecorator('phone', {
                                            rules: [{ required: true, message: 'Please input your employer phone number!' }],
                                        })(
                                            <Input style={{ width: '100%' }} />
                                        )}
                                    </FormItem>
                                    <FormItem label="Company Website">
                                        {getFieldDecorator('website', {
                                            rules: [{ required: false, message: 'Please input website!' }],
                                        })(
                                            <AutoComplete
                                            dataSource={websiteOptions}
                                            onChange={this.handleWebsiteChange}
                                            placeholder="website"
                                            >
                                            <Input />
                                            </AutoComplete>
                                        )}
                                    </FormItem>
                                </Panel>
                                <Panel header="Bank Infomation" key="3">
                                    <Row gutter={8}>
                                        <Col sm={24} md={24} lg={8}>
                                            <FormItem label="Transit Number">
                                                {getFieldDecorator('transitNumber', {
                                                    rules: [{
                                                    required: true, message: 'Please input your bank transit number correctly', len: 5,
                                                    }],
                                                })(
                                                    <Input placeholder='Transit Number'/>
                                                )}
                                            </FormItem>
                                        </Col>
                                        <Col sm={24} md={24} lg={8}>
                                            <FormItem label="Insititution Number">
                                                {getFieldDecorator('insititutionNumber', {
                                                    rules: [{
                                                    required: true, message: 'Please input your bank insititution number correctly', len: 3,
                                                    }],
                                                })(
                                                    <Input placeholder='Insititution Number' />
                                                )}
                                            </FormItem>
                                        </Col>
                                        <Col sm={24} md={24} lg={8}>
                                            <FormItem label="Account Number">
                                                {getFieldDecorator('accountNumber', {
                                                    rules: [{
                                                    required: true, message: 'Please input your account number correctly', min: 7, max: 12,
                                                    }],
                                                })(
                                                    <Input placeholder='Account Number'/>
                                                )}
                                            </FormItem>
                                        </Col>
                                    </Row>
                                    <FormItem {...tailFormItemLayout}>
                                        {getFieldDecorator('agreement', {
                                            valuePropName: 'checked',
                                        })(
                                            <Checkbox>I have read the <a href="">agreement</a></Checkbox>
                                        )}
                                    </FormItem>
                                    <FormItem {...tailFormItemLayout}>
                                        <Button type="primary" htmlType="submit">Apply</Button>
                                    </FormItem>
                                </Panel>
                            </Collapse>
                        </Form>
                    </Col>
                </Row>
            </Content>
        );
    }
}

const ApplicationForm = Form.create()(Application);
export default ApplicationForm;