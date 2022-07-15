import { CaretDownSmallIcon } from 'tdesign-icons-react'
import { Avatar, Dropdown } from 'tdesign-react'
import { Link } from 'react-router-dom'
const { DropdownItem } = Dropdown

export default function HeaderDropdown() {
  return (
    <Dropdown
      trigger="click"
      options={[
        <DropdownItem>
          <Link className="hover:no-underline" to="/user/profile">
            Your profile
          </Link>
        </DropdownItem>,
        <DropdownItem divider>
          <Link className="hover:no-underline" to="/settings">
            Settings
          </Link>
        </DropdownItem>,
        <DropdownItem>
          <Link className="hover:no-underline" to="/sign-out">
            Sign out
          </Link>
        </DropdownItem>
      ]}
    >
      <div className="space-x-1 cursor-pointer">
        <Avatar image="https://codesktop.vercel.app/avatar.png" />
        <CaretDownSmallIcon />
      </div>
    </Dropdown>
  )
}
