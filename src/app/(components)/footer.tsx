"use client"

import { useLanguage } from '@/i18n'
import { LinkedinIcon } from 'lucide-react'

import { FacebookIcon } from 'next-share'
import Link from 'next/link'

export function Footer() {
  const { t } = useLanguage()
  return (
    <footer className={`flex flex-col gap-4 w-full pb-4`}>
      {/* <div className='flex justify-center items-center gap-4'>
        <Link href="#" target='_blank'><FacebookIcon size={28} /></Link>
        <Link href="#" target='_blank'><YoutubeIcon /></Link>
        <Link href="#" target='_blank'><LinkedinIcon size={28} /></Link>
      </div> */}
      {/* <div className='grid grid-cols-1 md11:gr11id-cols-2'>
        <div className='flex flex-row  flex-wrap flex-grow space-x-4 items-center justify-center text-muted-foreground text-xs ms-1 me-4'>
          <Link href="/">{t('Home')}</Link>
          <Link href="/about">{t('About')}</Link>
          <Link href="/products">{t('Products')}</Link>
          <Link href="/contact">{t('Contact')}</Link>
        </div>
      </div> */}
      <div className='text-xs text-center'>
        &copy;{new Date().getFullYear()} Dinamik Mühendislik ve Otomasyon Ltd. Şti.
      </div>

    </footer>
  )
}

function YoutubeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
      <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
    </svg>
  )
}