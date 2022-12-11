export function hiddenSpin(identifier: string) {
  const spinId = identifier.replace(/#/, '')
  const spinEl = document.getElementById(spinId)

  spinEl.classList.add('hidden')
  return spinEl
}
