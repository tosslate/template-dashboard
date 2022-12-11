import { PageLayout } from '../layouts/page'
import { Link } from 'react-router-dom'
import { Divider, Result } from 'antd'

export default function NotFoundPage() {
  const title = 'Page not found'
  const subTitle = '抱歉，没有找到对应的页面'

  return (
    <PageLayout page={{ title }}>
      <div className="px-5 py-12">
        <Result title={'404'} status={404} subTitle={subTitle} />
        <div className="-m-10 mx-auto w-72">
          <Divider>
            <Link className="text-base text-cyan-500" to="/">
              Back to home
            </Link>
          </Divider>
        </div>
      </div>
    </PageLayout>
  )
}
