import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'KUCC 도서관리 시스템',
    description: '고려대학교 중앙컴퓨터동아리 KUCC의 도서관리 시스템입니다.',
    image: 'logo512.png',
  }
  return (
    <Html lang="en">
      <Head>
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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
