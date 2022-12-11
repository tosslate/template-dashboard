import { LockOutlined } from '@ant-design/icons'
import { PageLayout } from '../../layouts/page'
import { useParams } from 'react-router-dom'
import { Button, Form, Input } from 'antd'

export default function ResetPasswordPage() {
  const { token } = useParams<{ token: string }>()

  return (
    <PageLayout page={{ title: 'Reset Password' }}>
      <div className="px-8 md:px-12 pt-10 pb-12">
        <h1 className="text-3xl text-center mb-8">Reset Password</h1>
        <Form>
          <Form.Item>
            <Input
              prefix={<LockOutlined />}
              placeholder="Password"
              size="large"
              type="password"
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<LockOutlined />}
              placeholder="Password Confirmation"
              size="large"
              type="password"
            />
          </Form.Item>
          <Form.Item>
            <Button block loading={false} size="large">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </PageLayout>
  )
}
