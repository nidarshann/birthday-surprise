import Link from 'next/link'
import YearsSince from '../components/YearsSince'
export default function Page2(){
  return (
    <main className="container">
      <h2>Light the candle</h2>
      <YearsSince />
      <p>Place the candle on the cake and light it carefully.</p>
      <ol>
        <li>Count the candles needed</li>
        <li>Light and steady the flame</li>
        <li>Keep a glass of water nearby</li>
      </ol>
      <div style={{marginTop:16}}>
        <Link href="/page3"><a className="action">Next: Sing</a></Link>
      </div>
      <div style={{marginTop:12}}><Link href="/page1">Back</Link></div>
    </main>
  )
}
