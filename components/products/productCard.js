
import style from './productsData.module.scss'


const ServiCard = ({
  cardIcon,
  cardH1,
  descir}) => {
  return (
  
                            <div className={style.serivcesCard}>
                                        <Image src={cardIcon}
                                          widht='500px'
                                          height='500px'
                                          className={style.serivcesIcon}
                                        />
                                        <h1> {cardH1}</h1>
                                        <p>{descir}</p>
                            </div>
  )
}

export default ServiCard;