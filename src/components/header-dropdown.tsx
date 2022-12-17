import { Dropdown } from '@douyinfe/semi-ui'
import { Link } from 'react-router-dom'
import { Avatar } from 'antd'

export function HeaderDropdown() {
  return (
    <Dropdown
      position="bottomLeft"
      // trigger="click"
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
      <div className="cursor-pointer h-8 pl-2">
        <Avatar
          alt="square"
          src="http://p2.music.126.net/x7yPwu3PsW4hkmeqq5ocRA==/109951167607333564.jpg"
        />
      </div>
    </Dropdown>
  )
}
