import { PageLayout } from '../layouts/page'
import { Link } from 'react-router-dom'
import { Divider, Result } from 'antd'

export default function NotFoundPage() {
  const title = '抱歉，没有找到对应的页面'
  const status = 404

  return (
    <PageLayout page={{ title }}>
      <div className="px-5 py-12">
        <Result title={`${status}`} status={status} subTitle={title} />
        <div className="-m-10 mx-auto w-72">
          <Divider>
            <Link className="text-base text-dark-200" to="/">
              回到首页
            </Link>
          </Divider>
        </div>
      </div>
    </PageLayout>
  )
}
