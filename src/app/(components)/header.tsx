"use client"

import { ThemeToggleButton } from '@/components/theme-toggle-button'
import { HeaderLogo2 } from '@/components/logo'
import { Input } from "@/components/ui/input"
// import DashboardUserMenu from './dashboard-user-menu'
import { FC, useEffect, useState } from 'react'
import { UserType } from '@/types/UserType'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FileCode2Icon, HomeIcon, MenuSquareIcon, ShieldQuestionIcon, SparklesIcon } from 'lucide-react'
import { SelectLang } from '@/components/select-lang'
import { useLanguage } from '@/i18n/index'

export function Header() {

  return (
    <header className="flex h-16 lg:h-22 items-center justify-between border-b bg-white px-1 md:px-2 dark:border-gray-800 dark:bg-gray-950"    >
      <Link className="" href="/">
        <HeaderLogo2 className='' />
      </Link>
      <nav className=" hidden gap-2 text-sm font-medium md:flex my-0 mx-0 ">
        {/* <MenuLink icon={<HomeIcon />} href="/" text="Home" />
        <MenuLink icon={<ShieldQuestionIcon />} href="/about" text="About" />
        <MenuLink icon={<SparklesIcon />} href="/products" text="Products" />
        <MenuLink icon={<FileCode2Icon />} href="/contact" text="Contact" /> */}
        <div className='flex px-2 py-2 gap-1'>
          {/* <div className='flex flex-col items-center min-w-42'>
            <SelectLang />
          </div> */}
          <div className=' flex flex-col items-center'>
            <ThemeToggleButton />
          </div>
        </div>
      </nav>
      <div className='flex md:hidden'>
        <DropdownMenu >
          <DropdownMenuTrigger asChild  >
            <Button className="rounded-full border border-gray-200 w-12 h-12 dark:border-gray-800" size="icon" variant="ghost">
              <MenuSquareIcon /><span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" >
            {/* <MobileMenuLink icon={<HomeIcon />} href="/" text="Home" />
            <MobileMenuLink icon={<ShieldQuestionIcon />} href="/about" text="About" />
            <MobileMenuLink icon={<SparklesIcon />} href="/products" text="Products" />
            <MobileMenuLink icon={<FileCode2Icon />} href="/contact" text="Contact" />
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className='flex flex-col items-center min-w-42'>
                <SelectLang />
              </div>
            </DropdownMenuItem> */}
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <ThemeToggleButton />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

interface MenuLinkProps {
  text?: string
  icon?: React.ReactNode
  href: string

}
function MenuLink({ text, href, icon }: MenuLinkProps) {
  const { t } = useLanguage()
  return (
    <Link className="rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800  flex flex-col items-center" href={href}>
      {icon}
      {t(text || '')}
    </Link>
  )
}

function MobileMenuLink({ text, href, icon }: MenuLinkProps) {
  const { t } = useLanguage()
  return (
    <DropdownMenuItem>
      <Link href={href} className='flex items-center gap-2 my-1'>
        {icon}
        {t(text || '')}
      </Link>
    </DropdownMenuItem>
  )
}
