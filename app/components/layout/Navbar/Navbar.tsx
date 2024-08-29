'use client';
import './Navbar.scss'
import React, { useState } from 'react'
import { Menu, MenuItem, ProductItem } from "../../ui/navbar-menu";
import SwitchDarkMode from '@/components/layout/SwitchDarkMode/SwitchDarkMode'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import {
     Popover,
     PopoverButton,
     PopoverBackdrop,
     PopoverPanel,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import useHash from '@/hooks/useHash';
import ctx from '@/lib/api/api';
import { Blog } from '@prisma/client';

function CloseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
     return (
          <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
               <path
                    d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
               />
          </svg>
     )
}

interface NavbarProps {
     blogPosts: Blog[]
}

const Navbar = ({ blogPosts }: NavbarProps) => {
     const [active, setActive] = useState<string | null>(null);
     const pathname = usePathname();
     const hash = useHash();

     const links = [
          {
               id: 0,
               name: 'A propos',
               href: '/#about'
          },
          {
               id: 1,
               name: 'Technologies',
               href: '/#tools'
          },
          {
               id: 2,
               name: 'Expériences',
               href: '/#experience'
          },
          {
               id: 3,
               name: 'Projets',
               href: '/#projects'
          },
          {
               id: 4,
               name: 'Contact',
               href: '/#contact'
          },
          {
               id: 5,
               name: 'Blog',
               href: '/blog'
          },
     ]

     return (

          <div className='sticky header flex-center z-[200]'>
               <Link href='/' className='home-btn'>
                    <BackgroundGradient className="rounded-full bg-white/80 dark:bg-zinc-800/80">
                         <Image
                              src='/images/me.jpeg'
                              alt='Guillaume ZEHREN'
                              width={48}
                              height={48}
                              className='avatar'
                         />
                    </BackgroundGradient>
               </Link>
               <div className='nav-desktop'>
                    <BackgroundGradient className="rounded-full bg-white/80 dark:bg-zinc-800/80">
                         <Menu setActive={setActive}>
                              {links.filter(x => x.name !== 'Blog').map((link) =>
                                   <Link
                                        key={link.id}
                                        className={'font-medium hover-text-gradient ' + ((pathname === link.name || hash === link.href.slice(1)) && 'active-text-gradient')}
                                        href={link.href}
                                   >
                                        {link.name}
                                   </Link>
                              )}

                              <MenuItem setActive={setActive} active={active} href='/blog' item="Blog">
                                   <div className="relative text-sm grid grid-cols-1 xl:grid-cols-2 gap-10 p-4">
                                        {blogPosts.map((post, i) => (
                                             <ProductItem key={i}
                                                  title={post.title}
                                                  href={`/blog/article/${post.slug}`}
                                                  src={post.imageUrl}
                                                  description={post.summary}
                                             />
                                        ))}
                                   </div>
                              </MenuItem>
                         </Menu>


                    </BackgroundGradient>
               </div>

               <div className="nav-mobile">
                    <Popover>
                         <PopoverButton className="flex-center nav-dropdown-btn">
                              Menu
                              <ChevronDownIcon className="size-4 ml-1" />
                         </PopoverButton>
                         <PopoverBackdrop
                              transition
                              className="nav-backdrop"
                         />
                         <PopoverPanel
                              focus
                              transition
                              className="nav-dropdown-content"
                         >
                              <div className="nav-dropdown-header">
                                   <PopoverButton aria-label="Close menu">
                                        <CloseIcon />
                                   </PopoverButton>
                                   <h2>
                                        Navigation
                                   </h2>
                              </div>
                              <nav className="mt-6">
                                   <ul className="nav-links">
                                        {links.map((link) => <li key={link.id}>
                                             <PopoverButton as={Link} href={link.href} className={(pathname === link.href ? 'active' : '') + ' nav-link'}>
                                                  {link.name}
                                             </PopoverButton>
                                        </li>
                                        )}
                                   </ul>
                              </nav>
                         </PopoverPanel>
                    </Popover>
               </div>

               <div className='ml-2 md:ml-auto'>
                    <SwitchDarkMode />
               </div>
          </div>
     )
}

export default Navbar
