import './globals.scss';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from '@/components/layout/Navbar/Navbar';
import Background from '@/components/layout/Background/Background';
import { Toaster } from "@/components/ui/toaster"
import Footer from '@/components/layout/Footer/Footer';

const font = Poppins({
     weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
     subsets: ['latin'],
     variable: "--font-sans",
});

export const metadata: Metadata = {
     title: 'Guillaume ZEHREN - Portfolio | Home',
     description: "I'm a Fullstack Web Developer",
};

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
                    <title>{metadata.title as string}</title>
               </head>

               <body className={`flex h-full ${font.className}`}>
                    <ThemeProvider
                         attribute="class"
                         defaultTheme="system"
                         enableSystem
                         disableTransitionOnChange
                    >
                         <div className="w-full">
                              <div className="layout-container">
                                   <Background />
                                   <div className="centered-content">
                                        <div className="page-content">
                                             <Navbar />
                                             <main>{children}</main>
                                        </div>
                                   </div>
                              </div>
                              <Footer />

                         </div>
                         <Toaster />
                    </ThemeProvider>
               </body>
          </html>
     );
}
