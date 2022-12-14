import { Page } from '../layouts/page'
import { Link } from 'react-router-dom'
import { Center } from '../components/center'
import { Divider, Result } from 'antd'

export default function NotFoundPage() {
  const title = '抱歉，没有找到对应的页面'
  const status = 404

  return (
    <Page page={{ title }}>
      <Center height="calc(100vh - 100px)">
        <div className="max-w-md">
          <Result title={`${status}`} status={status} subTitle={title} />
          <div className="m-auto w-72">
            <Divider>
              <Link className="text-base text-stone-500" to="/">
                回到首页
              </Link>
            </Divider>
          </div>
        </div>
      </Center>
    </Page>
  )
}
