import './globals.scss';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from '@/components/layout/Navbar/Navbar';
import Background from '@/components/layout/Background/Background';
import { Toaster } from "@/components/ui/toaster"
import Footer from '@/components/layout/Footer/Footer';
import ctx from './lib/api/api';
import Head from 'next/head';

const font = Poppins({
     weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
     subsets: ['latin'],
     variable: "--font-sans",
});

export const metadata: Metadata = {
     title: 'Guillaume ZEHREN - Développeur Web Fullstack | Portfolio',
     description: "Je suis Guillaume ZEHREN, Développeur Web Freelance Fullstack",
};

export default async function RootLayout({
     children,
}: {
     children: React.ReactNode;
}) {
     const blogPosts = await ctx.getNavbarBlogPostData();

     return (
          <html lang="fr" suppressHydrationWarning>
               <Head>
                    <title>{metadata.title! as string}</title>
                    <meta name="description" content={metadata.description!} />
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    {/* Additional SEO tags */}
                    <meta property="og:title" content={metadata.title! as string} />
                    <meta property="og:description" content={metadata.description!} />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://guillaume-zehren.com" />
                    {/* <meta property="og:image" content="https://guillaume-zehren.com/image.jpg" /> */}
               </Head>

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
                                             <Navbar blogPosts={blogPosts} />
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
