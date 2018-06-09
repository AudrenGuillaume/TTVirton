import React from 'react';
import { Form, Input, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

const { TextArea } = Input;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

import '../../../styles/ant.less';
import './contact.less';

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

        const formItemLayout = { labelCol: { xs: { span: 24 }, sm: { span: 8 } }, wrapperCol: { xs: { span: 24 }, sm: { span: 16 } }};
        const tailFormItemLayout = { wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } } };

        return (
            <Form onSubmit={this.handleSubmit} layout="vertical">
                <Form.Item label="Email">
                    {getFieldDecorator('email', {
                        rules: [
                            { type: 'email', message: 'The input is not valid E-mail!' },
                            { message: 'Please input your E-mail!' }
                        ]
                    })
                        (<Input />)}
                </Form.Item>
                <Form.Item label="Name">
                    {getFieldDecorator('name', { rules: [{ message: 'Please input your Name!', whitespace: true }] })
                        (<Input />)}
                </Form.Item>
                <Form.Item label="Message" >
                    {getFieldDecorator('message', { rules: [{ message: 'Please fill this textarea!' }] })
                        (<TextArea rows={2} placeholder="2000 caractères max." />)}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm;