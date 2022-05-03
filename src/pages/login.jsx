import {
  Button,
  Divider,
  Form,
  Input,
  MessagePlugin as toast
} from 'tdesign-react'
import { UserIcon, LockOnIcon } from 'tdesign-icons-react'
import { Link, useHistory } from 'react-router-dom'
import { useMutation } from 'react-query'
import { useRef } from 'react'
import PageLayout from '../layouts/page'
import reqres from '../helpers/reqres'

export default function LoginPage() {
  const form = useRef()
  const history = useHistory()
  const { isLoading, mutate } = useMutation(
    (account) => reqres.login(account),
    {
      onSuccess: (data) => handleSuccess(data),
      onError: ({ response }) => showError(response?.data?.error)
    }
  )

  function handleSubmit(event) {
    const { email, password } = form.current.getFieldsValue([
      'email',
      'password'
    ])
    mutate({ email, password })
  }

  function handleSuccess(data) {
    history.replace('/')
  }

  function showError(message = '使用者名称或密码错误') {
    toast.error(message)
  }

  return (
    <PageLayout page={{ title: 'Log In' }}>
      <div className="px-8 md:px-12 pt-10 pb-12">
        <h1 className="text-3xl text-center mb-8">Welcome Back</h1>
        <Form ref={form} onSubmit={(event) => handleSubmit(event)}>
          <Form.FormItem name="email">
            <Input
              prefixIcon={<UserIcon />}
              placeholder="Email Address"
              size="large"
            />
          </Form.FormItem>
          <Form.FormItem name="password">
            <Input
              prefixIcon={<LockOnIcon />}
              placeholder="Password"
              size="large"
              type="password"
            />
          </Form.FormItem>
          <Form.FormItem>
            <Button block loading={isLoading} size="large" type="submit">
              Log In
            </Button>
          </Form.FormItem>
        </Form>
        <Divider className="m-0">
          <Link className="text-base text-cyan-500" to="/forgot-password">
            Forgot your password?
          </Link>
        </Divider>
      </div>
    </PageLayout>
  )
}
