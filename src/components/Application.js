import React from 'react';
import {Collapse, Row, Col, Layout, Form, Input, Tooltip, Icon, Cascader, Select, Checkbox, Button, AutoComplete} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

const residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

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
          const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
          })(
            <Select style={{ width: 70 }}>
              <Option value="86">+86</Option>
              <Option value="87">+87</Option>
            </Select>
          );
      
          const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
          ));

        return (
            <Content>
                <Row type="flex" justify="space-around">
                    <Col sm={24} md={24} lg={16}>
                        <Form onSubmit={this.handleSubmit}>
                            <Collapse defaultActiveKey={['1']}>
                                    <Panel header="Personal Infomation" key="1">
                                        <Row gutter={8}>
                                            <Col sm={24} md={24} lg={8}>
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
                                        Nickname&nbsp;
                                        <Tooltip title="What do you want others to call you?">
                                            <Icon type="question-circle-o" />
                                        </Tooltip>
                                        </span>
                                    )}
                                    >
                                    {getFieldDecorator('nickname', {
                                        rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                                    })(
                                        <Input />
                                    )}
                                    </FormItem>
                                    <FormItem
                                    label="Habitual Residence"
                                    >
                                    {getFieldDecorator('residence', {
                                        initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                                        rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
                                    })(
                                        <Cascader options={residences} />
                                    )}
                                    </FormItem>
                                    <FormItem
                                    label="Phone Number"
                                    >
                                    {getFieldDecorator('phone', {
                                        rules: [{ required: true, message: 'Please input your phone number!' }],
                                    })(
                                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                                    )}
                                    </FormItem>
                                    <FormItem
                                    label="Website"
                                    >
                                    {getFieldDecorator('website', {
                                        rules: [{ required: true, message: 'Please input website!' }],
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
                                    <FormItem
                                    label="Captcha"
                                    extra="We must make sure that your are a human."
                                    >
                                    <Row gutter={8}>
                                        <Col span={12}>
                                        {getFieldDecorator('captcha', {
                                            rules: [{ required: true, message: 'Please input the captcha you got!' }],
                                        })(
                                            <Input />
                                        )}
                                        </Col>
                                        <Col span={12}>
                                        <Button>Get captcha</Button>
                                        </Col>
                                    </Row>
                                    </FormItem>
                                    <FormItem {...tailFormItemLayout}>
                                    {getFieldDecorator('agreement', {
                                        valuePropName: 'checked',
                                    })(
                                        <Checkbox>I have read the <a href="">agreement</a></Checkbox>
                                    )}
                                    </FormItem>
                                    <FormItem {...tailFormItemLayout}>
                                    <Button type="primary" htmlType="submit">Register</Button>
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