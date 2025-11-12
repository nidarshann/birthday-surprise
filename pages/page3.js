import Link from 'next/link'
import YearsSince from '../components/YearsSince'
export default function Page3(){
  return (
    <main className="container">
      <h2>Sing</h2>
      <YearsSince />
      <p>Gather everyone and sing the birthday song.</p>
      <p>Make eye contact with the celebrant and smile.</p>
      <div style={{marginTop:16}}>
        <Link href="/page4"><a className="action">Next: Blow out</a></Link>
      </div>
      <div style={{marginTop:12}}><Link href="/page2">Back</Link></div>
    </main>
  )
}
