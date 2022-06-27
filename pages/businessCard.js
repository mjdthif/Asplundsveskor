
import QrContact from '../components/ContacQR/QrContact';
import HireForm from '../components/HireForm';
import businessCardStyle from '../styles/businessCard.module.scss'

const BusinessCard = () => {
  return (
    <div className={businessCardStyle.container} > 
          <QrContact/>
          <HireForm/>   
    </div>
  )
}
export default BusinessCard;