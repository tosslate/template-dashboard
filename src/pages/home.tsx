import { Dashboard } from '../layouts/dashboard'
import { Center } from '../components/center'
import { Avatar, Spin, Table } from 'antd'
import { If, Then, Else } from 'react-if'
import { useQuery } from 'react-query'
import reqres from '../helpers/reqres'

export default function HomePage() {
  const title = 'Dashboard'
  const { isLoading, data } = useQuery('users', () =>
    reqres.listUsers({ per_page: 12 })
  )

  return (
    <Dashboard page={{ title }}>
      <div className="p-8">
        <If condition={isLoading}>
          <Then>
            <Center height="12rem">
              <Spin />
            </Center>
          </Then>
          <Else>
            <Table
              columns={[
                { title: 'ID', dataIndex: 'id' },
                {
                  title: 'Avatar',
                  dataIndex: 'avatar',
                  render: (_, record) => <Avatar src={record.avatar} />
                },
                { title: 'First Name', dataIndex: 'first_name' },
                { title: 'Last Name', dataIndex: 'last_name' },
                { title: '电子邮件', dataIndex: 'email' }
              ]}
              dataSource={data?.data}
              rowKey="id"
            />
          </Else>
        </If>
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
