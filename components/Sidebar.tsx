'use client'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = ({user} : SiderbarProps) => {
    const pathName = usePathname();
    
  return (
    <aside className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link href="/" className='flex mb-12 cursor-pointer items-center gap-2'>
                <Image src="/icons/logo.svg" alt="Horizon Bank Logo" width={34} height={34} className='size-[24px] max-xl:size-14' />
                <h1 className='sidebar-logo'>Horizon Bank</h1>
            </Link>
            {sidebarLinks.map((link) => {
                const isActive = pathName === link.route || pathName.startsWith(`${link.route}/`);
                return (
                  <Link
                    key={link.label}
                    href={link.route}
                    className={cn('sidebar-link', {
                      'bg-bank-gradient': isActive,
                    })}
                  >
                    <div className='relative size-6'>
                        <Image src={link.imgURL} alt={link.label} fill className={cn({'brightness-[3] invert-0' : isActive})} />
                    </div>
                    <p className={cn('sidebar-label', {'!text-white': isActive})}>
                        {link.label}
                    </p>
                  </Link>
                );
            })}
        </nav>
        <div>User</div>
        <footer>Footer</footer>
    </aside>
  )
}

export default Sidebar