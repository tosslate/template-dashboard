import HeaderDropdown from './header-dropdown'

export default function Header() {
  return (
    <div className="flex flex-row-reverse px-5 lg:px-12">
      <HeaderDropdown />
    </div>
  )
}

// import Logo from './logo'

// export default function Header() {
//   return (
//     <header>
//       <div className="max-w-4xl mx-auto">
//         <div className="flex justify-between">
//           <Logo className="ml-6" title="随机诗词" />
//         </div>
//       </div>
//     </header>
//   )
// }
