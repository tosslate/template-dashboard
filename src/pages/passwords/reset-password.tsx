import { LockOutlined } from '@ant-design/icons'
import { PageLayout } from '../../layouts/page'
import { useParams } from 'react-router-dom'
import { Button } from '@douyinfe/semi-ui'
import { Form, Input, Typography } from 'antd'

export default function ResetPasswordPage() {
  const { token } = useParams<{ token: string }>()

  return (
    <PageLayout page={{ title: '设置密码' }}>
      <div className="px-8 md:px-12 pt-10 pb-12">
        <div className="text-center mb-8">
          <Typography.Title level={3}>设置密码</Typography.Title>
        </div>
        <Form>
          <Form.Item>
            <Input.Password placeholder="输入密码" size="large" />
          </Form.Item>
          <Form.Item>
            <Input.Password placeholder="再次输入密码" size="large" />
          </Form.Item>
          <Form.Item>
            <Button block loading={false} size="large" theme="solid">
              保存
            </Button>
          </Form.Item>
        </Form>
      </div>
    </PageLayout>
  )
}
