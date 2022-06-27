
import QrContact from '../components/QrContact/QrContact';
import businessCardStyle from '../styles/businessCard.module.scss'

const BusinessCard = () => {
  return (
    <div className={businessCardStyle.container} > 
          <QrContact/>
    </div>
  )
}
export default BusinessCard;