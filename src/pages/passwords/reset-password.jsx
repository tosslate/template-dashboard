import { Button, Divider, Form, Input } from 'tdesign-react'
import { LockOnIcon } from 'tdesign-icons-react'
import { Link, useHistory } from 'react-router-dom'
import { useMutation } from 'react-query'
import { useRef } from 'react'
import OutsideLayout from '../../layouts/outside'
import reqres from '../../helpers/reqres'
// // import { If, Then, Else } from 'react-if'

export default function ResetPasswordPage() {
  return (
    <OutsideLayout page={{ title: 'Reset Password' }}>
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
    </OutsideLayout>
  )
}

//         password: '',
//         passwordConfirmation: ''
//     async resetPassword() {
//         const { email } = this.$route.query
//         const { token } = this.$route.params
//         const { password: newPassword, passwordConfirmation } = this.user
//         await axios.put('/api/reset-password', { email, token, newPassword, password_confirmation: passwordConfirmation })
//         this.user = {
//           password: '',
//           passwordConfirmation: ''
//         }
