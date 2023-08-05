type BannerProps = {
  children: React.ReactNode
  type: 'sad' | 'happy'
}

function Banner({ type, children }: BannerProps) {
  return <div className={`banner ${type}`}>{children}</div>
}

export default Banner
