import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>KUChaek</title>
        <link rel="icon" href="/logo512.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
