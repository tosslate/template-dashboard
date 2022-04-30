import React, { Component } from 'react'
import { If, Then, Else } from 'react-if'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Button from 'antd/lib/button'
import Input from 'antd/lib/input'
import Form from 'antd/lib/form'
import Result from 'antd/lib/result'
import Divider from 'antd/lib/divider'
import message from 'antd/lib/message'
import { MailOutlined } from '@ant-design/icons'
import DefaultLayout from '../layouts/default'

class ForgotPasswordPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        email: ''
      },
      success: false,
      isLoading: false
    }
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Forgot Password</title>
        </Helmet>
        <DefaultLayout>
          <div className="bg-white shadow rounded px-12 py-8">
            <If condition={false}>
              <Then className="max-w-sm">
                <Result status="success" title="We have sent you a password recovery email." />
              </Then>
              <Else>
                <div className="text-center mb-8">
                  <h1 className="text-3xl">Forgot Password</h1>
                  <p>Enter your email address to retrieve your password</p>
                </div>
                <Form className="Page__forgotPassword">
                  <Form.Item>
                    <Input prefix={<MailOutlined className="mr-1" />} placeholder="Email Address" size="large" type="email" />
                  </Form.Item>
                  <Form.Item>
                    <Button block loading={false} htmlType="submit" size="large" type="primary">Retrieve Password</Button>
                  </Form.Item>
                </Form>
                <Divider>
                  <Link className="font-normal" to="/login">Back to login page</Link>
                </Divider>
              </Else>
            </If>
          </div>
        </DefaultLayout>
      </>
    )
  }
}

export default ForgotPasswordPage
