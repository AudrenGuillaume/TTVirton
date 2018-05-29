import React from 'react';
import { Form, Input, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

const {TextArea} = Input;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

class RegistrationForm extends React.Component {
    state = { confirmDirty: false, autoCompleteResult: [] };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err)
                console.log('Received values of form: ', values);
        });
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password'))
            callback('Two passwords that you enter is inconsistent!');
        else
            callback();
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty)
            form.validateFields(['confirm'], { force: true });
        callback();
    }

    handleWebsiteChange = (value) => {
        let autoCompleteResult;
        if (!value) autoCompleteResult = [];
        else autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        this.setState({ autoCompleteResult });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: { xs: { span: 24 }, sm: { span: 8 } },
            wrapperCol: { xs: { span: 24 }, sm: { span: 16 } }
        };
        const tailFormItemLayout = {
            wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } },
        };
        const prefixSelector = getFieldDecorator('prefix', { initialValue: '86' })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );

        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));

        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Item {...formItemLayout} label="Email" >
                    {getFieldDecorator('email', {
                        rules: [
                            { type: 'email', message: 'The input is not valid E-mail!' },
                            { required: true, message: 'Please input your E-mail!' }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Name">
                    {getFieldDecorator('name',
                        { rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }] }
                    )(<Input />)}
                </Form.Item>
                <Form.Item  {...formItemLayout} label="Message" >
                    {getFieldDecorator('message',
                        { rules: [{ required: true, message: 'Please fill this textarea!' }] })
                        (<TextArea rows={10} />)}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">Register</Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

ReactDOM.render(<WrappedRegistrationForm />, mountNode);