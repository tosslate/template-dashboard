import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Button from 'antd/lib/button'
import Input from 'antd/lib/input'
import Form from 'antd/lib/form'
import message from 'antd/lib/message'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import DefaultLayout from '../layouts/default'

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        email: '',
        password: ''
      },
      isLoading: false
    }
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Log In</title>
        </Helmet>
        <DefaultLayout>
          <div className="bg-white shadow rounded px-12 py-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl">Welcome Back</h1>
            </div>
            <Form className="Page__login">
              <Form.Item>
                <Input prefix={<UserOutlined className="mr-1" />} required placeholder="Email Address" size="large" type="email" />
              </Form.Item>
              <Form.Item>
                <Input prefix={<LockOutlined className="mr-1" />} required placeholder="Password" size="large" type="password" />
                <div className="flex justify-end">
                  <Link className="leading-10" to="/forgot-password">Forgot your password?</Link>
                </div>
              </Form.Item>
              <Form.Item>
                <Button block loading={this.state.isLoading} htmlType="submit" size="large" type="primary">Log In</Button>
              </Form.Item>
            </Form>
          </div>
        </DefaultLayout>
      </>
    )
  }
}

export default LoginPage
