import thumbnail from '../../img/thumbnail.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return(
        <>
        <Image src={thumbnail} alt='home' width={479} height={182} />
        <h1>hello this is home</h1>
        <Link href='/search?text=abc'>go search</Link>
        </>
    )
}