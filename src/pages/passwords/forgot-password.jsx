import { Button, Divider, Form, Input } from 'tdesign-react'
import { CheckCircleFilledIcon, MailIcon } from 'tdesign-icons-react'
import { Link, useHistory } from 'react-router-dom'
import { useMutation } from 'react-query'
import { useRef } from 'react'
import OutsideLayout from '../../layouts/outside'
import reqres from '../../helpers/reqres'
// // import { If, Then, Else } from 'react-if'

export default function ForgotPasswordPage() {
  return (
    <OutsideLayout page={{ title: 'Forgot Password' }}>
      <div className="px-8 md:px-12 pt-10 pb-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl mb-3">Forgot Password</h1>
          <p className="text-base">
            Enter your email to retrieve your password
          </p>
        </div>
        <Form>
          <Form.FormItem>
            <Input
              prefixIcon={<MailIcon />}
              placeholder="Email Address"
              size="large"
              type="email"
            />
          </Form.FormItem>
          <Form.FormItem>
            <Button block loading={false} size="large" type="submit">
              Retrieve Password
            </Button>
          </Form.FormItem>
        </Form>
        <Divider className="m-0">
          <Link className="text-base text-cyan-500" to="/login">
            Back to login page
          </Link>
        </Divider>
      </div>
    </OutsideLayout>
  )
}

//      <Result status="success" title="We have sent you a password recovery email." />
// <a-result status="success" title="We have sent you a password recovery email."></a-result>
// <a-form class="forgotPassword"
//       user: {
//         email: ''
//       },
//       success: false,
//       isLoading: false
// async forgotPassword() {
//     const { email } = this.user
//     const { data } = await axios.post('/api/send-reset-password', { email })
//     this.user.email = ''
