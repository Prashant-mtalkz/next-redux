import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import Head from 'next/head'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
  <Head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  )
}
