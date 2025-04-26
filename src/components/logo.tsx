import Link from 'next/link'

export const HeaderLogo2 = ({
  className,
}: { className?: string }) => {
  return (
    <div className={`flex flex-row text-xl items-center max-h-12 font-semibold  ${className}`}>
      <img src='/img/logo2.png' className='h-16' />
    </div>
  )
}