import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Analytics } from "@vercel/analytics/next"


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    // { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
  
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          // "min-h-screen bg-background font-sans antialiased",
          "min-h-screen font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>

          {/* background image */}

          <div className="fixed inset-0 -z-10">
      <div 
        className="absolute inset-0 bg-[url('../images/real_desktop.PNG')] bg-cover bg-center bg-no-repeat"
        style={{ 
          // implement this later idk why it doesn't recognise when i sub for backgroundImage when in the code it looks like it makes sense wahhh
          // backgroundImage: `url('../images/real_desktop.PNG')`, 
          width: "auto",
          height: "auto",
          // width: '10000px',
          // height: '10000px',
          filter: 'blur(3px)',
          opacity: 0.3,
        }}
      />
      {/* <div className="absolute inset-0 bg-gray-900/80" />  */}
    </div>

    {/* main screen */} 

          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl px-6 flex-grow overflow-hidden">
              {children}
              <Analytics />
            </main>
            {/* <footer className="w-full flex items-center justify-center py-3"> */}
              {/* <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://heroui.com?utm_source=next-app-template"
                title="heroui.com homepage"
              >
                <span className="text-default-600">i love u</span>
                <p className="text-primary">HeroUI</p>
              </Link> */}
            {/* </footer> */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
