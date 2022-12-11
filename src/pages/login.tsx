import { Button, Card, Divider, Form, Input, message as toast } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Link, useHistory } from 'react-router-dom'
// import { useMutation } from 'react-query'
import { useRef } from 'react'
import { PageLayout } from '../layouts/page'
// import reqres from '../helpers/reqres'

export default function LoginPage() {
  const form = useRef()
  const history = useHistory()
  // const { isLoading, mutate } = useMutation(
  //   (account) => reqres.login(account),
  //   {
  //     onSuccess: (data) => handleSuccess(data),
  //     onError: ({ response }) => showError(response?.data?.error)
  //   }
  // )

  // function handleSubmit(event) {
  //   const { email, password } = form.current.getFieldsValue([
  //     'email',
  //     'password'
  //   ])
  //   mutate({ email, password })
  // }

  function handleSuccess(data) {
    history.replace('/')
  }

  function showError(message = '使用者名称或密码错误') {
    toast.error(message)
  }

  return (
    <PageLayout page={{ title: 'Log In' }}>
      <Card>asdasdsd</Card>
      <div className="max-w-md mx-auto rounded shadow bg-white">
        <div className="px-8 md:px-12 pt-10 pb-12">
        <h1 className="text-3xl text-center mb-8">Welcome Back</h1>
          <Form ref={form}>
            <Form.Item name="email">
              <Input
                prefix={<UserOutlined className="w-4 h-4" />}
                placeholder="Email Address"
                size="large"
              />
            </Form.Item>
            <Form.Item name="password">
              <Input
                prefix={<LockOutlined className="w-4 h-4" />}
                placeholder="Password"
                size="large"
                type="password"
              />
            </Form.Item>
            <Form.Item>
              <Button className="bg-black" block loading={false} type="primary" size="large">
                Log In
              </Button>
            </Form.Item>
          </Form>
          <Divider>
            <Link className="text-base text-cyan-500" to="/forgot-password">
              Forgot your password?
            </Link>
          </Divider>
        </div>
      </div>
    </PageLayout>
  )
}
