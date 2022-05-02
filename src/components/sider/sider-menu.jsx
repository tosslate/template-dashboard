import { Menu } from 'tdesign-react'
const { MenuItem, SubMenu } = Menu

export default function SiderMenu({ data }) {
  return (
    <Menu theme="dark" value={'/'} width="100%">
      {data.map((item, index) => {
        if (Array.isArray(item.contents)) {
          return (
            <SubMenu key={index} title={item.name}>
              {item.contents.map((item, index) => {
                return (
                  <MenuItem key={index} value={item.link}>
                    {item.name}
                  </MenuItem>
                )
              })}
            </SubMenu>
          )
        }

        return (
          <MenuItem key={index} value={item.link}>
            {item.name}
          </MenuItem>
        )
      })}
    </Menu>
  )
}

// openKeys: []
// selectedKeys: []
