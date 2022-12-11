export default function Logo({
  src = 'https://www.tencent.com/img/index/menu_logo.png'
}) {
  return (
    <div className="select-none pl-5">
      <img alt="Logo" src={src} width="136px" />
    </div>
  )
}

// import { Link } from 'react-router-dom'
// import { If, Then, Else } from 'react-if'

// interface LogoProps {
//   className: string
//   title: string
//   src?: string
// }

// export default function Logo({
//   className = '',
//   title = 'Logo',
//   src
// }: LogoProps) {
//   return (
//     <Link className={`flex items-center h-14 ${className}`} to="/">
//       <If condition={src}>
//         <Then>
//           <img alt={title} src={src} />
//         </Then>
//         <Else>
//           <span className="font-semibold text-transparent tracking-widest bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
//             {title}
//           </span>
//         </Else>
//       </If>
//     </Link>
//   )
// }
