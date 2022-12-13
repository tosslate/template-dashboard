import { Form, Input, message as toast } from 'antd'
import { IconUserStroked, IconLockStroked } from '@douyinfe/semi-icons'
import { Link, useHistory } from 'react-router-dom'
import { Button } from '@douyinfe/semi-ui'
// import { useMutation } from 'react-query'
import { useRef } from 'react'
import { Center } from '../components/center'
import { Card } from '../components/shared/auth-card'
import { Page } from '../layouts/page'
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
    <Page page={{ title: '登录' }}>
      <Center height="calc(100vh - 100px)">
        <Card title="欢迎回来" backText="忘记密码？" back="/forgot-password">
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
        </Card>
      </Center>
    </Page>
  )
}
