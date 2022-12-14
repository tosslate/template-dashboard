import { Nav } from '@douyinfe/semi-ui'
import { Logo, Text } from './logo'
import {
  ArchiveBoxIcon,
  BookOpenIcon,
  Cog6ToothIcon,
  FolderIcon,
  Squares2X2Icon,
  UserCircleIcon
} from '@heroicons/react/24/outline'

interface SiderProps {
  isCollapsed?: boolean
}

export function Sider({ isCollapsed }) {
  return (
    <Nav
      className="bg-stone-100 min-h-screen"
      header={{
        logo: <Logo />,
        text: <Text />
      }}
      items={[
        {
          text: '主页',
          itemKey: 'Dashboard',
          icon: <Squares2X2Icon />
        },
        {
          text: '资源',
          itemKey: 'Resources',
          icon: <BookOpenIcon />,
          items: [
            { itemKey: 'Domains', text: '分类' },
            { itemKey: 'Caches', text: '订单' }
          ]
        },
        {
          itemKey: 'aaaa',
          text: '用户',
          icon: <UserCircleIcon />,
          items: [
            { itemKey: 'Networks', text: '列表' },
            { itemKey: 'Databases', text: '反馈' }
          ]
        }
      ]}
    />
  )
}
