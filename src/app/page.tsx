"use client"

import Widget from '@/components/Widget'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [showNotifications, setShowNotifications] = useState<boolean>(false)

  
  return (
   <main className=' relative overflow-scroll h-screen w-screen bg-black flex-col flex items-center text-zinc-800 dark:text-zinc-50'>
      <button onClick={() =>  setShowNotifications(!showNotifications)} className=' hover:bg-violet-400 mt-3 bg-violet-500 px-2 py-3 rounded-sm font-bold mb-2'>Mostrar notifications</button>
      <Widget showNotifications={showNotifications} />
   </main>
  )
}
