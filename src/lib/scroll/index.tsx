import dynamic from 'next/dynamic'

const SmoothScroll = dynamic(
  () => import('./smooth.component'),
  { ssr: false }
)

export default SmoothScroll