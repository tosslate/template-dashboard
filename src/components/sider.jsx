import SiderMenu from './sider-menu'
// import sider from './sider.module.css'

export default function Sider({ logo }) {
  return (
    <div className="h-screen">
      <div className="">{logo}</div>
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
