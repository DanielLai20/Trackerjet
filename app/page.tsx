import Image from 'next/image'
import Nav from '@/components/nav'

export default function Home() {
  return (
    <main className="flex min-h-screen justify-between p-24 bg-gradient-to-b from-black to-slate-600">
      <div className="flex">
        <Nav></Nav>
      </div>
    </main>
  )
}
