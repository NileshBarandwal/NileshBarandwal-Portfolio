import { useEffect, useState } from 'react'
import { typewriterRoles } from '../data/mockData'

type Phase = 'typing' | 'pause' | 'deleting'

export function useTypewriter() {
  const [displayText, setDisplayText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [phase, setPhase] = useState<Phase>('typing')

  useEffect(() => {
    const current = typewriterRoles[roleIndex]

    if (phase === 'typing') {
      if (displayText === current) {
        const t = setTimeout(() => setPhase('pause'), 1800)
        return () => clearTimeout(t)
      }
      const t = setTimeout(
        () => setDisplayText(current.slice(0, displayText.length + 1)),
        100,
      )
      return () => clearTimeout(t)
    }

    if (phase === 'pause') {
      const t = setTimeout(() => setPhase('deleting'), 500)
      return () => clearTimeout(t)
    }

    if (phase === 'deleting') {
      if (displayText === '') {
        setPhase('typing')
        setRoleIndex((i) => (i + 1) % typewriterRoles.length)
        return
      }
      const t = setTimeout(() => setDisplayText((prev) => prev.slice(0, -1)), 50)
      return () => clearTimeout(t)
    }
  }, [displayText, roleIndex, phase])

  return displayText
}
