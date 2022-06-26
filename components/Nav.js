import Link from 'next/link';
import style from '../styles/nav.module.scss';
import{FaTimes, FaBars} from 'react-icons/fa';



const Nav = ({toggle, isOpen}) => {

  return (
      <>

<nav className={style.nav}>
            <div className={style.contactInfo}>
     
            </div>
                  <ul>
                      <li>
                      <Link href='/'>Hem</Link>
                      </li>
                      <li>
                      <Link href='/products'>Alla Produkter </Link>
                      </li>
                      <li>
                      <Link href='/contact'>Kontakta oss </Link>
                      </li>
                      <li>
                      <Link href='/findUs'>Hitta oss </Link>
                      </li>
                      <li>
                      <Link href='/aboutUs'> Om oss </Link>
                      </li>
                  </ul>
                  <div onClick={toggle} className={style.mobileIcon}>
                        {isOpen ? <FaTimes/>: <FaBars/>}
                </div>
          </nav>
      </>

   

  


  )
}

export default Nav;