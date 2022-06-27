import QrContact from '../contacQR/QrContact.js';
import ProfileStyle from './profile.module.scss';
const Profile = () => {
  return (
    <div className={ProfileStyle.container}>
           <QrContact/> 
    </div>
  )
}

export default Profile;