import Image from 'next/image';
import headerStyle from './header.module.scss';



const Header = () => {
  return (
    <div className={headerStyle.headerContainer}>
        <div className={headerStyle.infoBg}>
     
        <video autoPlay loop muted src={'/asplundsVedio.mp4'} type='video/mp4' alt='Asplundsväskor'/>

            <div  className={headerStyle.InfoSecContent}>
                <h1> Travel.</h1>
                <h1>  </h1>
                <h1> best bag model  </h1>
            </div> 
            <div  className={headerStyle.InfoSecContent}>
                    <h1> Take off  </h1>
                    <h1>  Done in a day </h1>
                    <h1> Cuddle the </h1>
                    <Image  alt='QR code' src={'/myQR.png'}/>
            </div>      
        </div>
    </div>
  )
}

export default Header