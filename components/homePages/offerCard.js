import Image from 'next/image';
import style from './services.module.scss';

const OfferCard = ({
  cardIcon,
  cardH1,
  descir}) => {
  return (
  
                            <div className={style.serivcesCard}>
                                        <Image src={cardIcon}
                                          widht='500px'
                                          height='500px'
                                          alt="Asplunds products and services "
                                          className={style.serivcesIcon}
                                        />
                                        <h1> {cardH1}</h1>
                                        <p>{descir}</p>
                            </div>
  )
}

export default OfferCard;