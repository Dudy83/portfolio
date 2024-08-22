'use client';

import './globals.scss';
import 'animate.css';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { ThemeProvider } from "@/components/theme-provider";
import Navbar from '@/components/Navbar/Navbar';
import Background from '@/components/Background/Background';
import { BackgroundGradient } from './components/ui/background-gradient';

const font = Poppins({
     weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
     subsets: ['latin'],
     variable: "--font-sans",
});

// export const metadata: Metadata = {
//      title: 'Guillaume ZEHREN - Portfolio | Home',
//      description: "I'm a Fullstack Web Developer",
// };

export default function RootLayout({
     children,
}: {
     children: React.ReactNode;
}) {
     return (
          <html lang="en" suppressHydrationWarning>
               <head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Guillaume ZEHREN - Portfolio | Home</title>
               </head>

               <body className={`animate__animated animate__fadeIn flex h-full ${font.className}`}>
                    <ThemeProvider
                         attribute="class"
                         defaultTheme="system"
                         enableSystem
                         disableTransitionOnChange
                    >
                         <main className="w-full">
                              <div className="layout-container">
                                   <Background />
                                   <div className="centered-content">
                                        <div className="page-content">
                                             <Navbar />
                                             <div>{children}</div>
                                        </div>
                                   </div>
                              </div>
                         </main>
                    </ThemeProvider>
               </body>
          </html>
     );
}
