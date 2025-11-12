import Link from 'next/link'
import YearsSince from '../components/YearsSince'
export default function Page4(){
  return (
    <main className="container">
      <h2>Blow out</h2>
      <YearsSince />
      <p>Make a wish and blow out the candles.</p>
      <p>Cheer and enjoy the cake afterwards!</p>
      <div style={{marginTop:16}}>
        <a className="action" href="https://birthday-v3-demo.vercel.app/" target="_blank" rel="noopener">Open original site</a>
      </div>
      <div style={{marginTop:12}}><Link href="/page3">Back</Link></div>
    </main>
  )
}
