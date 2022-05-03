import { Button, Form, Input } from 'tdesign-react'
import { LockOnIcon } from 'tdesign-icons-react'
import { useParams } from 'react-router-dom'
import PageLayout from '../../layouts/page'

export default function ResetPasswordPage() {
  const { token } = useParams()

  return (
    <PageLayout page={{ title: 'Reset Password' }}>
      <div className="px-8 md:px-12 pt-10 pb-12">
        <h1 className="text-3xl text-center mb-8">Reset Password</h1>
        <Form>
          <Form.FormItem>
            <Input
              prefixIcon={<LockOnIcon />}
              placeholder="Password"
              size="large"
              type="password"
            />
          </Form.FormItem>
          <Form.FormItem>
            <Input
              prefixIcon={<LockOnIcon />}
              placeholder="Password Confirmation"
              size="large"
              type="password"
            />
          </Form.FormItem>
          <Form.FormItem>
            <Button block loading={false} size="large" type="submit">
              Submit
            </Button>
          </Form.FormItem>
        </Form>
      </div>
    </PageLayout>
  )
}
