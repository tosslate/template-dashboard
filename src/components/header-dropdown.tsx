import { Dropdown } from '@douyinfe/semi-ui'
import { Link } from 'react-router-dom'
import { Avatar } from 'antd'

export function HeaderDropdown() {
  return (
    <Dropdown
      trigger="click"
      render={
        <Dropdown.Menu>
          <Dropdown.Item>
            <Link to="/user/profile">个人资料</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/settings">设置</Link>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            <Link to="/sign-out">登出</Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      }
    >
      <div className="space-x-1 cursor-pointer">
        <Avatar
          alt="nameasdasd"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
        {/* <CaretDownSmallIcon /> */}
      </div>
    </Dropdown>
  )
}
