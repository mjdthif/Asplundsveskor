

import footerStyle from '../styles/footer.module.scss';


const Footer = () => {
  return (
    <footer className={footerStyle.footer}>
          <div> 
           Asplundsväskor ©  { new Date().getUTCFullYear() } All right reserved.
          </div>
          <span>Levantisk.©.DEV </span>
    </footer>
  )
}

export default Footer;