import DashboardLayout from '../layouts/dashboard'
import { Avatar, Loading, Table } from 'tdesign-react'
import { If, Then, Else } from 'react-if'
import { useQuery } from 'react-query'
import reqres from '../helpers/reqres'

export default function HomePage() {
  const title = 'Dashboard'
  const { isLoading, data } = useQuery('users', () => reqres.listUsers())

  return (
    <DashboardLayout page={{ title }}>
      <div className="p-5 lg:px-12">
        <If condition={isLoading}>
          <Then>
            <div className="flex items-center justify-center h-96">
              <Loading />
            </div>
          </Then>
          <Else>
            <Table
              columns={[
                { colKey: 'id', title: 'ID' },
                {
                  colKey: 'avatar',
                  title: 'Avatar',
                  cell: ({ col, row }) => <Avatar image={row[col.colKey]} />
                },
                { colKey: 'first_name', title: 'First Name' },
                { colKey: 'last_name', title: 'Last Name' },
                { colKey: 'email', title: '电子邮件' }
              ]}
              data={data?.data}
            />
          </Else>
        </If>
      </div>
    </DashboardLayout>
  )
}
