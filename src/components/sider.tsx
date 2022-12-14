import { Nav } from '@douyinfe/semi-ui'
import { Logo, Text } from './logo'

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
        { itemKey: 'Dashboard', text: 'Dashboard' },
        {
          itemKey: 'Resources',
          text: 'Resources',
          items: [
            { itemKey: 'Networks', text: 'Networks' },
            { itemKey: 'Databases', text: 'Databases' },
            { itemKey: 'Domains', text: 'Domains' },
            { itemKey: 'Caches', text: 'Caches' }
          ]
        }
      ]}
    />
  )
}
