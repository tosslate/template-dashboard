import { useHistory, useLocation } from 'react-router-dom'
import { AppIcon, SettingIcon } from 'tdesign-icons-react'
import { Menu } from 'tdesign-react'

const { MenuItem, SubMenu } = Menu
const icons = [<AppIcon />, <SettingIcon />]

export default function SiderMenu({ data }) {
  const history = useHistory()
  const location = useLocation()

  function handleClick(event) {
    history.push(event)
  }

  return (
    <Menu defaultExpanded={['Resources']} theme="dark" value={location.pathname} width="100%">
      {data.map((item, index) => {
        if (Array.isArray(item.contents)) {
          return (
            <SubMenu key={index} value={item.name} icon={icons[index]} title={item.name}>
              {item.contents.map((item, index) => {
                return (
                  <MenuItem
                    key={index}
                    value={item.path}
                    onClick={(event) => handleClick(item.path)}
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
            onClick={(event) => handleClick(item.path)}
          >
            {item.name}
          </MenuItem>
        )
      })}
    </Menu>
  )
}
