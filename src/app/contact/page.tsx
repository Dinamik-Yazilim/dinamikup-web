"use client"

import { useLanguage } from '@/i18n'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'
import { WhatsappIcon, WhatsappShareButton } from 'next-share'
import { HeaderLogo2 } from '@/components/logo'

export default function AboutPage() {
  const { t, lang } = useLanguage()
  return (
    <div className='flex flex-col gap-4'>
      <h1>{t('Contact')}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4'>
        <div >
          <HeaderLogo2 />

        </div>
        <Card>
          <CardHeader>
            <CardTitle>{t('Headquarter')}</CardTitle>
            <CardDescription>{t('legal_name')}</CardDescription>
          </CardHeader>
          <CardContent className='flex flex-col gap-4 text-sm'>
            <div className='flex flex-col md:flex-row items-start w-full md:gap-4'>
              <div className='border-b text-nowrap'>{t('Address')} :</div>
              <div className='text-wrap'>Gazi Mah. 24011 Nolu Sokak Münire Büyükkonutlu Apt. No:3 Şehitkamil/Gaziantep Türkiye</div>
            </div>
            <div className='flex flex-col md:flex-row items-start w-full md:gap-4'>
              <div className='border-b'>{t('Email')} :</div>
              <div>contact@trendsenfoni.com</div>
            </div>
            <div className='flex flex-col md:flex-row items-start w-full md:gap-4'>
              <div className='border-b'>{t('Telephone')} :</div>
              <div>
                <Link href="tel:+905327298827">+90 532 729 88 27</Link>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link className='flex items-center p-2 border rounded-md bg-green-500' target='_blank'
              href="https://api.whatsapp.com/send?phone=905327298827&text=marslantas.com%3A%20I%20want%20to%20get%20information">
              <WhatsappIcon size={32} /> {t('Customer Support')}
            </Link>

          </CardFooter>
        </Card>

      </div>
    </div>
  )
}