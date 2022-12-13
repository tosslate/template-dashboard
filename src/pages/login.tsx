import { Divider, Form, Input, message as toast } from 'antd'
import {
  IconUserStroked,
  IconLockStroked,
  IconSemiLogo
} from '@douyinfe/semi-icons'
import { Link, useHistory } from 'react-router-dom'
import { Button } from '@douyinfe/semi-ui'
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
    <PageLayout page={{ title: '登录' }}>
      <div className="max-w-md mx-auto rounded shadow bg-white">
        <div className="px-8 md:px-12 pt-10 pb-12">
          <h1 className="text-4xl text-center text-blue-700">
            <IconSemiLogo size="inherit" />
          </h1>
          <h2 className="text-3xl text-center mb-8">欢迎回来</h2>
          <Form ref={form}>
            <Form.Item name="email">
              <Input
                placeholder="电子邮件"
                prefix={<IconUserStroked />}
                size="large"
                type="email"
              />
            </Form.Item>
            <Form.Item name="password">
              <Input.Password
                placeholder="密码"
                prefix={<IconLockStroked />}
                size="large"
              />
            </Form.Item>
            <Form.Item>
              <Button block loading={false} size="large" theme="solid">
                登录
              </Button>
            </Form.Item>
          </Form>
          <Divider>
            <Link className="text-base text-blue-700" to="/forgot-password">
              忘记了您的密码？
            </Link>
          </Divider>
        </div>
      </div>
    </PageLayout>
  )
}
