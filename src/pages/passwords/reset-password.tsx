import { PageLayout } from '../../layouts/page'
import { useParams } from 'react-router-dom'
import { Button } from '@douyinfe/semi-ui'
import { Card } from '../../components/shared/auth-card'
import { Center } from '../../components/center'
import { Form, Input, Typography } from 'antd'

export default function ResetPasswordPage() {
  const { token } = useParams<{ token: string }>()

  return (
    <PageLayout page={{ title: '设置密码' }}>
      <Center height="calc(100vh - 100px)">
        <Card title="设置密码" backText="回到首页">
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
        </Card>
      </Center>
    </PageLayout>
  )
}
