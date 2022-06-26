
import Header from '../header/Header';
import Profile from '../profile/profile';
import style from './homePage1.module.scss';




export default function HomePage1() {
  return (
      <div className={style.homeContainer}>
        <div className={style.profileContainer}>
        <Profile/>
        </div>
        <Header/>
      </div>

 
  )
}