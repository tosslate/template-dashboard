import NotFound from './not-found'

export default function Result({ title, subTitle, status }) {
  return (
    <div className="px-8 py-12">
      <div className="mx-auto" style={{ width: '250px', height: '295px' }}>
        <NotFound />
      </div>
      <div className="space-y-3 pt-5">
        <h3 className="text-2xl text-center text-zinc-700">{title}</h3>
        <p className="text-sm text-center text-zinc-400">{subTitle}</p>
      </div>
    </div>
  )
}
