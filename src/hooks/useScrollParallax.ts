import { useEffect, useRef } from 'react'

export function useScrollParallax() {
  const float1Ref = useRef<HTMLDivElement>(null)
  const float2Ref = useRef<HTMLDivElement>(null)
  const float3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.pageYOffset
      if (float1Ref.current) float1Ref.current.style.transform = `translateY(${y * 0.1}px)`
      if (float2Ref.current) float2Ref.current.style.transform = `translateY(${y * -0.05}px)`
      if (float3Ref.current)
        float3Ref.current.style.transform = `translateY(${y * 0.15}px) rotate(${y * 0.05}deg)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { float1Ref, float2Ref, float3Ref }
}
