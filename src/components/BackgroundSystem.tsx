import { useScrollParallax } from '../hooks/useScrollParallax'

export function BackgroundSystem() {
  const { float1Ref, float2Ref, float3Ref } = useScrollParallax()

  return (
    <>
      {/* Animated background image */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-50 overflow-hidden">
        <img
          alt="Background Texture"
          className="w-full h-full object-cover animate-background-alive"
          src="/portfolio/hero-bg.jpg"
        />
      </div>
      {/* Dark scrim so content stays legible */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[#08080A]/75" />
      <div className="grain-overlay" />
      <div className="dot-grid" />
      <div
        ref={float1Ref}
        className="fixed pointer-events-none opacity-20 blur-[1px] top-[20%] left-[10%] font-mono text-[10px] text-primary z-10"
      >
        0x1A2B...3F4E
      </div>
      <div
        ref={float2Ref}
        className="fixed pointer-events-none opacity-20 blur-[1px] top-[40%] right-[5%] font-mono text-[10px] text-primary z-10"
      >
        {'<Secure_Enclave />'}
      </div>
      <div
        ref={float3Ref}
        className="fixed pointer-events-none opacity-20 blur-[1px] bottom-[10%] left-[15%] w-24 h-24 border border-primary/20 rounded-full z-10"
      />
    </>
  )
}
