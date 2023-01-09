import { Dashboard } from '../layouts/dashboard'
// import { Center } from '../components/center'
import { Button, DatePicker } from '@douyinfe/semi-ui'
import { Avatar, Pagination, Spin, Table, Tag, Typography } from 'antd'
// import { FunnelIcon } from '@heroicons/react/24/outline'
// import { If, Then, Else } from 'react-if'
import { useQuery } from 'react-query'
import { useHistory, useLocation } from 'react-router-dom'
// import reqres from '../helpers/reqres'
import axios from '../helpers/axios'

async function listCards({ page, perPage }: Record<string, any>) {
  const { data: cards } = await axios.get(
    `/pokemon?page=${page}&per_page=${perPage}`
  )
  const nextCursor = cards[cards.length - 1]?.id
  return { cards, nextCursor }
}

export default function HomePage() {
  const title = 'Dashboard'
  const history = useHistory()
  const location = useLocation()
  const { page = 1, per_page: perPage = 10 } = Object.fromEntries(
    new URLSearchParams(location.search)
  )
  const { isLoading, data } = useQuery(['cards', location.search], () =>
    listCards({ page, perPage })
  )

  return (
    <Dashboard page={{ title }}>
      <div className="p-6 pb-0">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-2xl text-stone-800">帖子</h3>
          <div className="flex items-center space-x-3">
            <Button theme="solid">创建帖子</Button>
          </div>
        </div>
        <Table
          columns={[
            { title: 'ID', dataIndex: 'id' },
            {
              title: '头像',
              dataIndex: 'avatar',
              render: (_, record) => (
                <Avatar shape="square" src={record.imageUrl} />
              )
            },
            { title: '名称', dataIndex: 'name' },
            { title: '类型', dataIndex: 'genus' },
            {
              title: '标签',
              dataIndex: 'types',
              render: (_, record) =>
                record.types.map((tag: string, index: number) => (
                  <Tag key={index} color="green">
                    {tag}
                  </Tag>
                ))
            }
          ]}
          // bordered
          dataSource={data?.cards}
          loading={isLoading}
          pagination={{
            current: Number(page),
            pageSize: Number(perPage),
            total: 898,
            size: 'default',
            showSizeChanger: false,
            onChange: (page) => {
              history.push(`/?page=${page}&per_page=${perPage}`)
            }
          }}
          rowKey="id"
          size="small"
        />
      </div>
    </Dashboard>
  )
}

// import PageLayout from '../layouts/page'
// import Loader from '../components/loader'
// import Center from '../components/center'
// import { If, Then, Else } from 'react-if'
// import { useQuery } from 'react-query'
// import axios from '../helpers/axios'
// import random from 'lodash/random'

// async function findFirst() {
//   const { data } = await axios.get('/shih-ching')
//   return data
// }

// export default function HomePage() {
//   const title = '随机诗词'
//   const { isLoading, data } = useQuery('shih-ching', () => findFirst())

//   return (
//     <PageLayout page={{ title }}>
//       <Center height="calc(100vh - 115px)">
//       </Center>
//     </PageLayout>
//   )
// }
