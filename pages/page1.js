import Link from 'next/link'
import YearsSince from '../components/YearsSince'
export default function Page1(){
  return (
    <main className="container">
      <h2>Decorate</h2>
      <YearsSince />
      <p>Grab balloons, streamers and confetti. Make it bright and cheerful.</p>
      <ul>
        <li>Hang balloons around the room</li>
        <li>Set up a cake table</li>
        <li>Play soft background music</li>
      </ul>
      <div style={{marginTop:16}}>
        <Link href="/page2"><a className="action">Next: Light the candle</a></Link>
      </div>
      <div style={{marginTop:12}}><Link href="/">Back home</Link></div>
    </main>
  )
}
