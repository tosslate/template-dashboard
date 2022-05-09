import NotFound from './not-found'

export default function Result({ title, subTitle, status, extra }) {
  return (
    <>
      <div className="mx-auto" style={{ width: '250px', height: '295px' }}>
        {status === 404 && <NotFound />}
      </div>
      <div className="space-y-3 pt-5">
        <h3 className="text-2xl text-center text-zinc-700">{title}</h3>
        <p className="text-base text-center text-zinc-400">{subTitle}</p>
      </div>
      {extra}
    </>
  )
}
