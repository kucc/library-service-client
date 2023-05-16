import logo from '../../img/logo512.png'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Search = () => {
    const router = useRouter()
    const { text } = router.query

    return (
        <>
            <p>Search: {text}</p>
            <Link href="detail/asdf">
                <div style={{display:"flex"}}>
                    <Image src={logo} alt="test" width={500} />
                    <div>
                        <h1>책이름 블라블라</h1>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Search