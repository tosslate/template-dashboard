import { Dropdown, Avatar } from 'tdesign-react'

export default function HeaderDropdown() {
  return (
    <Dropdown options={[
      { content: 'sadasd', value: 1 },
      { content: 'sadasd', value: 2 },
      { content: 'sadasd', value: 3, divider: true },
      { content: 'sadasd', value: 4 },
      { content: 'sadasd', value: 5 },
      { content: 'sadasd', value: 6 },
    ]}>
      <Avatar image="https://i2.wp.com/ui-avatars.com/api/applause" />
    </Dropdown>
  )
}

// {/* <Menu>
//       <Menu.Item>
//         <Link to="/user/profile">Your profile</Link>
//       </Menu.Item>
//       <Menu.Item>
//         <Link to="/settings">Settings</Link>
//       </Menu.Item>
//       <Menu.Item>
//         <Link to="/sign-out">Sign out</Link>
//       </Menu.Item>
//     </Menu> */}
// {/* <Space className="cursor-pointer">
// <Avatar src="" />
// <span className="select-none">applause</span>
// <DownOutlined className="text-xs" />
// //   <a-dropdown placement="bottomRight">
// //     <a-space class="cursor-pointer">
// //       <span class="select-none">applause</span>}
