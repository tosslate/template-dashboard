import { Button, Divider, Form, Input, message as toast } from 'antd'
import { MailOutlined } from '@ant-design/icons'
import { useMutation } from 'react-query'
import { Link } from 'react-router-dom'
import { PageLayout } from '../../layouts/page'
import reqres from '../../helpers/reqres'

export default function ForgotPasswordPage() {
  // const { isLoading, mutate } = useMutation(
  //   ({ userId }) => reqres.getUser(userId),
  //   {
  //     onSuccess: () => handleSuccess()
  //   }
  // )

  // function handleSubmit(event) {
  //   mutate({ userId: 1 })
  // }

  function handleSuccess(data) {
    toast.info('We have sent you a password recovery email.')
  }

  return (
    <PageLayout page={{ title: 'Forgot Password' }}>
      <div className="px-8 md:px-12 pt-10 pb-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl mb-3">Forgot Password</h1>
          <p className="text-base">
            Enter your email to retrieve your password
          </p>
        </div>
        <Form>
          <Form.Item>
            <Input
              prefix={<MailOutlined />}
              placeholder="Email Address"
              size="large"
              type="email"
            />
          </Form.Item>
          <Form.Item>
            <Button block loading={false} size="large">
              Retrieve Password
            </Button>
          </Form.Item>
        </Form>
        <Divider className="m-0">
          <Link className="text-base text-cyan-500" to="/login">
            Back to login page
          </Link>
        </Divider>
      </div>
    </PageLayout>
  )
}
