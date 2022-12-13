import { Form, Input, message as toast } from 'antd'
import { IconMailStroked } from '@douyinfe/semi-icons'
import { Button } from '@douyinfe/semi-ui'
import { Page } from '../../layouts/page'
import { useMutation } from 'react-query'
import { Card } from '../../components/shared/auth-card'
import { Center } from '../../components/center'
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
    <Page page={{ title }}>
      <Center height="calc(100vh - 100px)">
        <Card
          title={title}
          subTitle="输入邮箱地址接收密码重置链接"
          backText="回到首页"
        >
          <Form>
            <Form.Item>
              <Input
                placeholder="电子邮件"
                prefix={<IconMailStroked />}
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
        </Card>
      </Center>
    </Page>
  )
}
