import Image from 'next/image';
import cardStyle from '../../styles/artCard.module.scss';



 

const ServiCard = ({
  cardIcon,
  imgLink, 
  }) => {
  return (
  
                            <div className={cardStyle.wrapper}>
                                       <a href={imgLink} target="_blank" rel="noreferrer" alt='Asplund Products'><Image src={cardIcon}/></a> 
                            </div>
  )
}

export default ServiCard;