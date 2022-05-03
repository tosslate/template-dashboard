import DefaultLayout from '../layouts/default'

export default function PageLayout({ page, children }) {
  return (
    <DefaultLayout page={page}>
      <div className="flex justify-center px-2 md:px-0 py-16">
        <div className="bg-white rounded shadow max-w-md w-full">
          {children}
        </div>
      </div>
    </DefaultLayout>
  )
}
