import Link from 'next/link'
import YearsSince from '../components/YearsSince'
export default function Home() {
  return (
    <main className="container">
      <h1>Crafting your special moment…</h1>
      <YearsSince />
      <p style={{fontSize:16}}>Ready to start the surprise? Follow the steps — tap Start the surprise to begin.</p>
      <div style={{marginTop:20}}>
        <Link href="/page1"><a className="action">Start the surprise</a></Link>
      </div>
      <nav className="nav" aria-label="pages" style={{marginTop:18}}>
        <Link href="/page1">Decorate</Link> | <Link href="/page2">Light the candle</Link> | <Link href="/page3">Sing</Link> | <Link href="/page4">Blow out</Link>
      </nav>
    </main>
  )
}
