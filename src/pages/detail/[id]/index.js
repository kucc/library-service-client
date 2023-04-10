import Link from 'next/link'
import { useRouter } from 'next/router'

const Detail = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
        <p>book: {id}</p>
        <Link href="/home">홈으로</Link>
    </>
)
}

export default Detail