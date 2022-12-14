import { Nav } from '@douyinfe/semi-ui'
import { Logo, Text } from './logo'
import {
  ArchiveBoxIcon,
  BookOpenIcon,
  FolderIcon,
  LanguageIcon,
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
          text: '资讯',
          itemKey: 'News',
          icon: <BookOpenIcon />,
          items: [
            { itemKey: 'Internet', text: '互联网' },
            { itemKey: 'Sports', text: '体育' }
          ]
        },
        {
          text: '媒体',
          itemKey: 'Media',
          icon: <FolderIcon />,
          items: [
            { itemKey: 'Photo', text: '照片' },
            { itemKey: 'Video', text: '视频' }
          ]
        },
        {
          text: '归档',
          itemKey: 'Archive',
          icon: <ArchiveBoxIcon />,
          items: [
            { itemKey: 'Post', text: '帖子' },
            { itemKey: 'Page', text: '页面' }
          ]
        },
        {
          text: '我的',
          itemKey: 'Me',
          icon: <UserCircleIcon />,
          items: [
            { itemKey: 'Info', text: '个人信息' },
            { itemKey: 'Password', text: '密码管理' }
          ]
        },
        {
          text: '语言',
          itemKey: 'Language',
          icon: <LanguageIcon />
        }
      ]}
    />
  )
}
