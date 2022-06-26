import ServiceCard from './serviceCard';
import asplundServices from './servicesData';
import style from './services.module.scss'

const Services = (
  {
        id, 
        title,
        cards, 
}) => {
 
  return (
    <>

        <div className={style.servicesContainer} id='services'>
            <div className={style.servicesWrapper}>
            {
                (cards || []).map(
                      card => {        
             return <ServiceCard key={card.id} {...card}> </ServiceCard>
                        })
            }
                  
            </div>
        </div>
           
    </>
  )
}
export default Services;