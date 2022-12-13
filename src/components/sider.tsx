import SiderMenu from './sider-menu'

export function Sider({ logo }) {
  return (
    <div className="h-screen">
      <SiderMenu
        data={[
          { name: 'Dashboard', path: '/' },
          {
            name: 'Resources',
            contents: [
              { name: 'Networks', path: '/resources/networks' },
              { name: 'Databases', path: '/resources/databases' },
              { name: 'Domains', path: '/resources/domains' },
              { name: 'Caches', path: '/resources/caches' }
            ]
          }
        ]}
      />
    </div>
  )
}
