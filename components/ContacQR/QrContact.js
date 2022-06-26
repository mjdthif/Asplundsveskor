import Image from 'next/image';
import Link from 'next/link';
import QrSocialMedia from '../Contact';
import style from './qrContact.module.scss'


const QrContact = () => {
  return (

        <section className='container'>
             
                  <article className={style.person} >
                    <Link href="/">
                      <span>
                        <Image 
                        width="100px"
                        height='100px'
                        src='/Assests/asplundLogo.webp'/>
                      </span>
                    </Link>
              
                    </article>
                  
                  <QrSocialMedia></QrSocialMedia>
                  <div className={style.openTime}>
                      <h1>
                          Öppet från <br/>
                          <hr/>
                          Måndag till Fredag.<br/>
                          09:00-18:00 
                          <hr/>
                          Lördag.<br/> 10:00-15:00
                      </h1>
                  </div>
              
        </section>


  )
}

export default QrContact;