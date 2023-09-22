import Widget from '@/components/Widget'
import Image from 'next/image'

export default function Home() {
  return (
   <main className='h-screen bg-white dark:bg-black flex items-start justify-center text-zinc-800 dark:text-zinc-50'  >
      <Widget/>
   </main>
  )
}
