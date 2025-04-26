"use client"
import { useLanguage } from '@/i18n'
import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function HomePage() {
  const router = useRouter()

  return (<div className='flex flex-col h-[70vh] justify-center gap-4'>
    <div className='flex flex-col justify-center items-center gap-6'>
      <div className='w-[350px] border border-dashed rounded-lg h-[300px] flex flex-col items-center justify-start p-8 gap-4'>
        <h1 className='text-2xl'>DinamikUp Applications</h1>
        <Link href="https://miksip.dinamikup.com" target='_blank' className='border rounded-lg p-2 text-center'>📄🎯 Mikro Satın Alma Sipariş Yönetimi</Link>
        <Button className='w-full' variant={'outline'} disabled>🏄 DinamikUp Lite</Button>
        <Button className='w-full' variant={'outline'} disabled>🏄 DinamikUp ERP</Button>
      </div>

    </div>

  </div>)


}