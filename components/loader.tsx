import css from '../styles/scoped/loader.module.css'

export default function Loader() {
  return (
    <ul className="flex justify-center list-none space-x-1">
      <li
        className={`bg-teal-400 opacity-0 rounded w-2 h-2 ${css['dots-1']}`}
      ></li>
      <li
        className={`bg-teal-400 opacity-0 rounded w-2 h-2 ${css['dots-2']}`}
      ></li>
      <li
        className={`bg-teal-400 opacity-0 rounded w-2 h-2 ${css['dots-3']}`}
      ></li>
    </ul>
  )
}
