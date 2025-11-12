import { useEffect, useState } from 'react'

export default function YearsSince({ initialIso = '1999-11-11T00:00:00Z' }) {
  const [iso, setIso] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('since_date') || initialIso
    }
    return initialIso
  })
  const [years, setYears] = useState(26)

  useEffect(() => {
    // Force to 26 for the shared view
    setYears(26)
    if (typeof window !== 'undefined') {
      localStorage.setItem('since_date', iso)
    }
  }, [iso])

  return (
    <div className="years">
      <div className="big">{years} years ago</div>
      <div className="note">Click edit to change locally</div>
      <button onClick={() => {
        const v = prompt('Enter date (YYYY-MM-DD) to change locally', iso.slice(0,10))
        if (!v) return
        const candidate = v.length===10 ? v+'T00:00:00Z' : v
        if (!isNaN(new Date(candidate).getTime())) {
          localStorage.setItem('since_date', candidate)
          setIso(candidate)
          const then = new Date(candidate)
          const now = new Date()
          let diff = now.getFullYear() - then.getFullYear()
          const hadBday = (now.getMonth() > then.getMonth()) || (now.getMonth() === then.getMonth() && now.getDate() >= then.getDate())
          if (!hadBday) diff--
          setYears(diff)
        } else {
          alert('Invalid date')
        }
      }}>Edit (local)</button>
    </div>
  )
}
