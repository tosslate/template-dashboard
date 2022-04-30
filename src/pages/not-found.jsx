import DefaultLayout from '../layouts/default'
import Result from '../components/result'
import { Link } from 'react-router-dom'
import { Divider } from 'tdesign-react'

export default function NotFoundPage() {
  const title = 'Page not found'

  return (
    <DefaultLayout page={{ title }}>
      <div className="flex items-center justify-center py-16">
        <div className="bg-white rounded shadow px-12 py-8">
          <Result
            title={title}
            subTitle="The page you were looking for doesn’t exist."
          />
          <Divider>
            <Link className="text-blue-500" to="/">
              Back to home
            </Link>
          </Divider>
        </div>
      </div>
    </DefaultLayout>
  )
}
