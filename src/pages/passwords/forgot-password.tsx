import { Divider, Form, Input, Typography, message as toast } from 'antd'
import { Button } from '@douyinfe/semi-ui'
import { MailOutlined } from '@ant-design/icons'
import { PageLayout } from '../../layouts/page'
import { useMutation } from 'react-query'
import { Link } from 'react-router-dom'
import reqres from '../../helpers/reqres'

export default function ForgotPasswordPage() {
  const title = '忘记密码？'
  // const { isLoading, mutate } = useMutation(
  //   ({ userId }) => reqres.getUser(userId),
  //   {
  //     onSuccess: () => handleSuccess()
  //   }
  // )

  // function handleSubmit(event) {
  //   mutate({ userId: 1 })
  // }

  function handleSuccess() {
    toast.info('We have sent you a password recovery email.')
  }

  return (
    <PageLayout page={{ title }}>
      <div className="max-w-md mx-auto pt-2 px-2 md:pt-6 md:px-0">
        <div className="bg-white border border-stone-300 px-8 md:px-12 pt-10 pb-12">
          <div className="text-center mb-8">
            <Typography.Title level={3}>{title}</Typography.Title>
            <Typography.Text type="secondary">
              输入邮箱地址接收密码重置链接
            </Typography.Text>
          </div>
          <Form>
            <Form.Item>
              <Input
                placeholder="电子邮件"
                prefix={<MailOutlined />}
                size="large"
                type="email"
              />
            </Form.Item>
            <Form.Item>
              <Button block loading={false} size="large" theme="solid">
                找回密码
              </Button>
            </Form.Item>
          </Form>
          <div className="m-auto w-72">
            <Divider>
              <Link className="text-base text-blue-700" to="/login">
                回到首页
              </Link>
            </Divider>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
