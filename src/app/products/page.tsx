"use client"

import { useLanguage } from '@/i18n'

export default function AboutPage() {
  const { t } = useLanguage()
  return (
    <div className='flex flex-col gap-4'>
      <h1>{t('Products')}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci assumenda ea excepturi? Dolorem mollitia earum minus eligendi dolores deleniti voluptas? Maiores suscipit odit ullam atque cupiditate molestiae soluta aspernatur excepturi?</p>
        <p>Commodi iure, vero, perferendis recusandae distinctio, id ab vitae ullam dicta doloremque aut! Iusto corrupti nostrum alias sed quasi, quas maiores obcaecati.</p>
      </div>
    </div>
  )
}