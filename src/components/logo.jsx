export default function Logo({
  src = 'https://www.tencent.com/img/index/menu_logo.png'
}) {
  return (
    <div className="select-none pl-5">
      <img alt="Logo" src={src} width="136px" />
    </div>
  )
}
