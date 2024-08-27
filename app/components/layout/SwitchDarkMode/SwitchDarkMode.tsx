'use client';

import React, { useEffect, FC, useState } from 'react';
import { useTheme } from 'next-themes';
import { BackgroundGradient } from '@/components/ui/background-gradient';

export enum DarkMode {
     Light = 'light',
     Dark = 'dark',
}

export type DarkModeOptions = DarkMode | 'system';

export interface ISwitchDarkMode {
     defaultTheme?: DarkModeOptions;
}

const SwitchDarkMode = () => {
     const [mounted, setMounted] = useState(false)
     const { setTheme, resolvedTheme, systemTheme } = useTheme()

     useEffect(() => {
          setMounted(true);
          if (!resolvedTheme) {
               setTheme(systemTheme || 'dark');
          }
     }, [])

     if (!mounted) return;

     if (resolvedTheme === 'dark') {
          return (
               <BackgroundGradient className="rounded-full bg-zinc-800/80">
                    <button
                         onClick={() => setTheme('light')}
                         className="flex-center group rounded-full bg-white/80 min-h-12 px-4 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                    >
                         <svg
                              className={`size-6 fill-zinc-700 stroke-zinc-500 transition dark:group-hover:stroke-zinc-400`}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                         >
                              <path
                                   d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                                   strokeWidth="1.5"
                                   strokeLinecap="round"
                                   strokeLinejoin="round"
                              ></path>
                         </svg>


                    </button>
               </BackgroundGradient>)
     }

     if (resolvedTheme === 'light') {
          return (
               <BackgroundGradient className="rounded-full bg-white/80">
                    <button
                         onClick={() => setTheme('dark')}
                         className="flex-center group rounded-full bg-white/80 min-h-12 px-4 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                    >
                         <svg
                              className={`size-6 fill-teal-50 stroke-teal-500 transition group-hover:stroke-teal-600`}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                         >
                              <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path>
                              <path
                                   d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
                                   fill="none"
                              ></path>
                         </svg>

                    </button>
               </BackgroundGradient>)
     }
};

export default SwitchDarkMode;
