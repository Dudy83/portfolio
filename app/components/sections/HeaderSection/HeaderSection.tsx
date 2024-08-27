import { cn } from '@/lib/utils'
import React from 'react'

const HeaderSection = ({ title, description, centered = false }) => {
     return (
          <div className={cn("max-w-7xl mx-auto xl:px-16 px-0", centered ? 'lg:flex-center flex-col' : '')}>
               <div className={cn(centered ? 'lg:flex-center' : '')}>
                    <div className={cn("tags ", (centered ? 'lg:mt-3 -mb-6 lg:-mb-0' : '-mb-6'))}>{'<h1>'}</div>
                    <h1 className="hover-text-gradient active-text-gradient text-5xl lg:text-7xl !leading-[unset] tracking-tighter transition-all duration-300">{title}</h1>
                    <div className={cn("tags -mt-4", (centered ? 'lg:mt-3' : ''))}>{'</h1>'}</div>
               </div>

               <div className={cn("sm:ml-10 -mt-2 sm:-mt-4 flex flex-col lg:flex-row lg:space-x-2", centered ? 'lg:!mt-2' : '')}>
                    <span className="tags leading-[unset] -mb-4 lg:mb-0 xl:mt-1">{'<small>'}</span>
                    <h1 className={cn("dark:text-white text-black text-xl md:text-2xl xl:text-3xl aurore ml-2 sm:ml-6 lg:ml-1 text-left my-4 lg:my-0", centered ? 'lg:text-center' : '')}>{description}</h1>
                    <span className="tags leading-[unset] -mt-4 lg:mt-0  xl:mt-1">{'</small>'}</span>
               </div>
          </div>
     )
}

export default HeaderSection