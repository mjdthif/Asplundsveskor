
import cardStyle from '../../styles/artCard.module.scss';



 

const ServiCard = ({
  cardIcon,
  imgLink, 
  }) => {
  return (
  
                            <div className={cardStyle.wrapper}>
                                       <a href={imgLink} target="_blank"><img src={cardIcon}/></a> 
                            </div>
  )
}

export default ServiCard;