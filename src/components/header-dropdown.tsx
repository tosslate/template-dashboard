import { Dropdown } from '@douyinfe/semi-ui'
import { Link } from 'react-router-dom'
import { Avatar } from 'antd'

export function HeaderDropdown() {
  return (
    <Dropdown
      position="bottomLeft"
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
      <div className="h-8 pl-2">
        <button className="rounded-full bg-gradient-to-r from-pink-500 to-violet-500">
          <Avatar
            alt="square"
            src="https://unpkg.com/@tosslate/pokemon@1.0.1/assets/100.webp"
          />
        </button>
      </div>
    </Dropdown>
  )
}
