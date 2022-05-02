import SiderMenu from './sider-menu'
import sider from './sider.module.css'

export default function Sider({ logo }) {
  return (
    <div className="h-screen">
      <div className="">{logo}</div>
      <SiderMenu
        data={[
          { name: 'Dashboard', link: '/' },
          {
            name: 'Resources',
            contents: [
              { name: 'Networks', link: '/resources/networks' },
              { name: 'Databases', link: '/resources/databases' },
              { name: 'Caches', link: '/resources/caches' },
              { name: 'Domains', link: '/resources/domains' }
            ]
          }
        ]}
      />
    </div>
  )
}
