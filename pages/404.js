import Link from "next/link";


const NotFound = () => {
  return (
    <div>
        This Page is not found!
        <Link href="/"> Take me home</Link>
    </div>
  )
}

export default NotFound;