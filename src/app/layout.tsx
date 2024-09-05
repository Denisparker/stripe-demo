import type {Metadata} from "next"
import {Raleway} from "next/font/google"
import "styles/global.sass"

const roboto = Raleway({subsets: ["latin"], weight: "400"})

export const metadata: Metadata = {
  title: "Stripe demo"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <div id="modalRoot"></div>
      </body>
    </html>
  )
}
