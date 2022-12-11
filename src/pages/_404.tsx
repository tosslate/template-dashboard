// import PageLayout from '../layouts/page'
import Result from '../components/result'
import { Link } from 'react-router-dom'
import { Divider } from 'antd'

export default function NotFoundPage() {
  const title = 'Page not found'
  const subTitle = 'The page you were looking for doesn’t exist.'

  return (
    // PageLayout page={{ title }}
    <div>
      <div className="px-5 py-12">
        <Result
          {...{ title, subTitle }}
          status={404}
          extra={
            <Divider className="m-0 px-12 pt-5">
              <Link className="text-base text-cyan-500" to="/">
                Back to home
              </Link>
            </Divider>
          }
        />
      </div>
    </div>
  )
}
