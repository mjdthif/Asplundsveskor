
import Link from 'next/link';
import{FaTimes, FaBars} from 'react-icons/fa';
import {
    sideBarCloesed, 
    sideBarOpen,
}from './sidebar.module.scss';
import style from './sidebar.module.scss';






const SideBar = ({toggle, isOpen}) => {
    
  return (
        <div className={ isOpen ? sideBarOpen : sideBarCloesed } >
            <div className={style.closeIcon} >
                    {isOpen ? <FaTimes/>: <FaBars/> }
            </div>
        <div className={style.sideBarDiv}   onClick={toggle}>
            <ul className={style.sideBarMenu}>
                <li onClick={toggle}  className={style.sideBarItem}>
                    <Link   href='/' className={style.sideBarLink}>Hem</Link>
                </li>
                <li onClick={toggle} className={style.sideBarItem}>
                     <Link   href='/products' className={style.sideBarLink}>Produkter</Link>
                </li>
                <li  onClick={toggle} className={style.sideBarItem}>
                      <Link href='/contact'>Kontakta oss </Link>
                </li>
                <li  onClick={toggle} className={style.sideBarItem}>
                      <Link href='/findUs'>Hitta oss </Link>
                </li>
                <li  onClick={toggle} className={style.sideBarItem}>
                      <Link href='/aboutUs'> Om oss </Link>
                </li>
                
          
            </ul>   
        
        </div>
        </div>
  )
}

export default SideBar;