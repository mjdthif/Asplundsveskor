import Link from 'next/link';
import {BsWalletFill,BsLinkedin, BsInstagram,BsBehance, BsGlobe2} from 'react-icons/bs';
import{MdOutlineMailOutline, MdCall} from 'react-icons/md';
import QrCardStyle from '../styles/QrCard.module.scss';
const QrSocialMedia = () => {

  return (
    <div className={QrCardStyle.container}>
        <Link href='/'>AsplundsVäskor</Link>
        <a href='mailto:info@asplundsvaskor.se' target="_blank" rel="noopener"><MdOutlineMailOutline/> Email</a>
        <a href="tel:086532930" target="_blank" rel="noopener"><MdCall/>Phone</a>
        <a href="" target='_blank' rel="noopener"> <BsInstagram/> Instagram</a>
    </div>
  )
}

export default QrSocialMedia;