import React, { Component } from 'react';

// Ant design
import { Button, Form, Icon, Input } from 'antd';
const { Item } = Form;

const hasErrors = (fields) => Object.keys(fields).some(field => fields[field]);

class LoginForm extends Component{

    componentDidMount() {
        this.props.form.validateFields();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err)    
                console.log('Received values of form:', values);
            //must crypt + send
        });
    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form; 

        const style = { color: 'rgba(0,0,0,.25' };
        
        // error on touched fields
        const userError = isFieldTouched('username') && getFieldError('username');
        const passError = isFieldTouched('password') && getFieldError('password');

        return (
            <Form onSubmit={this.handleSubmit} layout="vertical">
                <Item validateStatus={userError ? 'error' : ''} help={userError || ''}>
                    {
                        getFieldDecorator('username', { rules: [{ required: true, message: 'Please input your username!' }] })
                            (<Input prefix={<Icon type="user" className="input_login" />} placeholder="Username" />)
                    }
                </Item>
                <Item validateStatus={passError ? 'error' : ''} help={passError || ''}>
                    {
                        getFieldDecorator('password', { rules: [{ required: true, message: 'Please input your password!' }] })
                            (<Input prefix={<Icon type="lock" className="input_login" />} type="password" placeholder="Password" />)
                    } 
                </Item>
                <Item>
                    <Button type="primary" htmlType="submit" disable={!!hasErrors(getFieldsError())}>Log in</Button>
                    <a className="login-form-forgot" href="">Forgot password</a>
                </Item>
            </Form>
        )
    }
}

export default Form.create()(LoginForm);