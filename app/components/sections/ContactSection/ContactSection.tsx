"use client";

import React from 'react';
import HeaderSection from '@/components/sections/HeaderSection/HeaderSection';
import ContactForm from '@/components/ContactForm/ContactForm';
import QRCodeCanvas from '@/components/Three/QrCode/QrCode';
import { motion } from "framer-motion";
import { Highlight } from "@/components/ui/hero-highlight";

const ContactSection = () => {
     return (
          <section className="my-10 pt-10">
               <div className='ml-4 lg:ml-0'>
                    <HeaderSection
                         title='Contact'
                         description={"Envoyez moi un message et je vous répondrai dans les plus brefs délais"}
                         centered={true}
                    />
               </div>
               <div className="tags ml-2">{'<form>'}</div>
               <div className='max-w-3xl relative mx-auto grid grid-cols-1 my-8'>
                    <div className='absolute left-0 lg:left-8 -top-16 md:-top-4 lg:-top-28 z-20'>
                         <svg className='text-black dark:text-white size-48 lg:size-52' version="1.0" xmlns="http://www.w3.org/2000/svg" width="1164.000000pt" height="980.000000pt"
                              viewBox="0 0 1164.000000 980.000000" preserveAspectRatio="xMidYMid meet">
                              <g transform="translate(0.000000,980.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
                                   <path d="M10854 6550 c-92 -21 -142 -91 -169 -235 -21 -107 -18 -142 31 -524
                                        19 -150 34 -277 32 -282 -2 -5 -28 5 -58 21 -30 17 -140 73 -243 125 -477 238
                                        -952 380 -1507 451 -196 24 -729 30 -960 10 -711 -62 -1365 -243 -2005 -555
                                        -450 -220 -696 -374 -1230 -770 -112 -83 -140 -90 -312 -68 -430 54 -873 46
                                        -1297 -23 -818 -132 -1613 -450 -2368 -946 -213 -139 -542 -380 -584 -426 -39
                                        -43 -45 -88 -17 -128 54 -79 80 -73 302 65 503 312 1065 574 1546 720 180 55
                                        436 116 767 184 340 69 462 87 673 97 140 6 559 -9 662 -25 l44 -6 -100 -134
                                        c-179 -242 -289 -466 -356 -726 -109 -425 -45 -815 185 -1125 220 -295 565
                                        -460 964 -460 247 0 459 52 701 173 410 204 697 546 800 953 111 434 11 800
                                        -309 1133 -149 155 -273 237 -590 392 -124 60 -226 112 -226 114 0 8 184 129
                                        325 213 192 115 552 293 772 381 1193 476 2460 516 3482 109 140 -56 371 -165
                                        371 -176 0 -4 -192 -54 -427 -111 -236 -57 -447 -111 -470 -121 -60 -26 -85
                                        -70 -80 -138 5 -68 36 -103 93 -105 22 -1 158 5 304 12 594 30 1084 -26 1508
                                        -173 152 -53 224 -48 305 23 50 45 79 109 79 179 1 35 -21 150 -55 297 -31
                                        132 -99 434 -152 670 -163 728 -193 833 -254 888 -55 49 -109 64 -177 47z
                                        m-5908 -2509 c511 -183 613 -238 787 -421 65 -68 96 -110 126 -173 164 -336
                                        31 -769 -305 -993 -168 -111 -354 -164 -582 -164 -199 0 -373 41 -509 121 -76
                                        45 -211 179 -252 251 -79 140 -115 332 -93 502 32 251 141 459 420 798 101
                                        124 137 157 173 158 9 0 115 -35 235 -79z"
                                   />
                              </g>
                         </svg>
                         <motion.h1
                              initial={{
                                   opacity: 0,
                                   y: 20,
                              }}
                              animate={{
                                   opacity: 1,
                                   y: [20, -5, 0],
                              }}
                              transition={{
                                   duration: 0.5,
                                   ease: [0.4, 0.0, 0.2, 1],
                              }}
                              className="text-base md:text-lg absolute left-[unset] md:-left-16 lg:-left-36 -right-36 md:right-[unset] -bottom-[unset] md:-bottom-0 top-8 md:top-[unset] text-nowrap px-4 font-semibold text-neutral-700 dark:text-white  text-center mx-auto "
                         >

                              <Highlight className="text-white">
                                   Téléchargez mon CV
                              </Highlight>
                         </motion.h1>
                    </div>
                    <div className='min-h-[250px] z-50'>
                         <QRCodeCanvas />
                    </div>
                    <div className='mt-[-125px]'>
                         <ContactForm />
                    </div>
               </div>
               <div className="tags ml-2">{'</form>'}</div>
          </section>
     )
}

export default ContactSection