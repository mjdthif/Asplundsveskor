import Image from 'next/image';
import Link from 'next/link';
import style from './header.module.scss';



const Header = () => {
  return (
    <div className={style.headerContainer}>
        <div className={style.infoBg}>
     
        <video autoPlay loop muted src={'/asplundsVedio.mp4'} type='video/mp4' alt='Asplundsväskor'/>

            <div  className={style.InfoSecContent}>
                <h1> Travel.</h1>
                <h1>  </h1>
                <h1> best bag model  </h1>
            </div> 
            <div  className={style.InfoSecContent}>
                    <h1> Take off  </h1>
                    <h1>  Done in a day </h1>
                    <h1> Cuddle the </h1>
                <Link href={'/businessCard'}>
                  <div className={style.qrContainer} > 
                      <Image width='140px' height='140px'  alt='QR code' src={'/myQR.png'}/>
                  </div>
                </Link>
                  
            </div>      
        </div>
    </div>
  )
}

export default Header