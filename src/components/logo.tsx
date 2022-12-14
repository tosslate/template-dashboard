import { IconSemiLogo } from '@douyinfe/semi-icons'

export function Logo() {
  return (
    <IconSemiLogo
      className="text-stone-900 text-3xl"
      style={{ padding: '3px' }}
      size="inherit"
    />
  )
}

export function Text() {
  return (
    <h3 className="font-semibold leading-9 text-xl text-transparent tracking-widest bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
      tosslate
    </h3>
  )
}
