import { Helmet } from 'react-helmet'

export default function DefaultLayout({ page, children }) {
  return (
    <>
      <Helmet>
        <title>{page?.title}</title>
      </Helmet>
      <div className="min-h-screen bg-zinc-100">{children}</div>
    </>
  )
}
