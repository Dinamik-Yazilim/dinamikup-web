"use client"

import { useLanguage } from '@/i18n'

export default function AboutPage() {
  const { t } = useLanguage()
  return (
    <div className='flex flex-col gap-4'>
      <h1>{t('About')}</h1>
      <h2>{t('legal_name')}</h2>
      <p>{t('about_text1')}</p>
      <p>{t('about_text2')}</p>
      <p>{t('about_text3')}</p>
      <p>{t('about_text4')}</p>
      <h3>{t('about_text5')}</h3>
    </div>
  )
}