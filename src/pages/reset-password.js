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

class ResetPasswordPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        password: '',
        passwordConfirmation: ''
      },
      isLoading: false
    }
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Reset Password</title>
        </Helmet>
        <DefaultLayout>
          <div className="bg-white shadow rounded px-12 py-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl">Reset Password</h1>
            </div>
            <Form className="Page__resetPassword">
              <Form.Item>
                <Input placeholder="Password" size="large" type="password" />
              </Form.Item>
              <Form.Item>
                <Input placeholder="Password Confirmation" size="large" type="password" />
              </Form.Item>
              <Form.Item>
                <Button block loading={false} htmlType="submit" size="large" type="primary">Submit</Button>
              </Form.Item>
            </Form>
          </div>
        </DefaultLayout>
      </>
    )
  }
}

export default ResetPasswordPage
