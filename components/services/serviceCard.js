import Image from 'next/image';
import style from './services.module.scss'
const ServiceCard = ({
  cardIcon,
  cardH1,
  descir
}) => {
  return (
  
    <>
    
                    <div  className={style.flipCard}>
                      <div className={style.flipCardInner}>
                        <div className={style.flipCardFront}>
                                                <Image src={cardIcon}
                                                 widht='400px'
                                                  height='400px'
                                                  className={style.imageCard}
                                                            />                                                  
                        </div>


                <div className={style.flipCardBack}>
                    <h1> {cardH1}</h1>
                    <p>{descir}</p>
                </div>
  </div>
</div>
  
                            
  </>
          
          

  )
}

export default ServiceCard;