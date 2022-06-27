import Link from 'next/link';
import {BsInstagram} from 'react-icons/bs';
import{MdOutlineMailOutline, MdCall} from 'react-icons/md';
import style from './QrCard.module.scss';


const QrSocialMedia = () => {

  return (
    <div className={style.container}>
        <Link href='/'>AsplundsVäskor</Link>
        <a href='mailto:info@asplundsvaskor.se' target="_blank" rel="noreferrer"><MdOutlineMailOutline/> Email</a>
        <a href="tel:086532930" target="_blank" rel="noreferrer"><MdCall/>Phone</a>
        <a href="" target='_blank' rel="noreferrer"> <BsInstagram/> Instagram</a>
    </div>
  )
}

export default QrSocialMedia;