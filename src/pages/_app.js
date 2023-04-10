import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  const meta = {
    title: 'KUCC 도서관리 시스템',
    description: '고려대학교 중앙컴퓨터동아리 KUCC의 도서관리 시스템입니다.',
    image: 'logo512.png',
  }
  return (
    <>
      <Head>
        <title>KUChaek</title>
        <link rel="shortcut icon" href="/logo512.png" />

        <meta name="description" content={meta.description} />
        <meta name="keywords" content="kucc, 도서관리, 고려대학교, 컴퓨터동아리" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />

        <meta name="twitter:card" content="summary" />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
