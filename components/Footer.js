

import footerStyle from '../styles/footer.module.scss';


const Footer = () => {
  return (
    <footer className={footerStyle.footer}>
      
          <div> 
            Sara portfilio ©  { new Date().getUTCFullYear() } All right reserved.
          </div>
          <span>Levantisk.©.DEV </span>
    </footer>
  )
}

export default Footer;