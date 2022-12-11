export default function FooterComponent({ copyright }) {
  return <div className="text-base text-center">{copyright}</div>
}

// import type { ReactNode } from 'react'

// interface FooterProps {
//   copyright: string | ReactNode
// }

// export default function Footer({ copyright }: FooterProps) {
//   return (
//     <footer>
//       <div className="max-w-4xl mx-auto">
//         <div className="h-14">{copyright}</div>
//       </div>
//     </footer>
//   )
// }
