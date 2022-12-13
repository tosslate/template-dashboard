import { useHistory, useLocation } from 'react-router-dom'
// import { AppIcon, SettingIcon } from '@heroicons/react'
import { Nav } from '@douyinfe/semi-ui'
import Logo from './logo'

// const { MenuItem, SubMenu } = Menu
// const icons = [<AppIcon />, <SettingIcon />]

export default function SiderMenu({ data }) {
  const location = useLocation()
  const history = useHistory()

  function navigate(path) {
    history.push(path)
  }

  return (
    <Menu
      logo={<Logo />}
      defaultExpanded={['Resources']}
      value={location.pathname}
      theme="dark"
      width="100%"
    >
      {data.map((item, index) => {
        if (Array.isArray(item.contents)) {
          return (
            <SubMenu
              key={index}
              value={item.name}
              icon={icons[index]}
              title={item.name}
            >
              {item.contents.map((item, index) => {
                return (
                  <MenuItem
                    key={index}
                    value={item.path}
                    onClick={() => navigate(item.path)}
                  >
                    {item.name}
                  </MenuItem>
                )
              })}
            </SubMenu>
          )
        }

        return (
          <MenuItem
            key={index}
            value={item.path}
            icon={icons[index]}
            onClick={() => navigate(item.path)}
          >
            {item.name}
          </MenuItem>
        )
      })}
    </Menu>
  )
}
