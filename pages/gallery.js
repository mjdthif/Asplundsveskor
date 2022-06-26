


import ArtSelctions from '../components/Gallery/ArtSelctions';
import {servicesLineOne,servicesLineTwo,servicesLineThree, liberatedT} from '../components/Gallery/artData';
import Viewmore from '../components/Viewmore';
import galleryStyle from '../styles/gallery.module.scss';



const Gallery = (props) => {
  

  return (

            <>
                     <div className={galleryStyle.container}>
                        <ArtSelctions {...props.liberatedT}/>
                      </div>
                      
                      <div className={galleryStyle.container}>
                          <ArtSelctions {...props.servicesLineOne}/> 
                      </div>
                    <Viewmore  servicesLineTwo={props.servicesLineTwo}/>  
            </>

 

  )
}
export async function getStaticProps(){
      return {
        props: {
          liberatedT:liberatedT,
          servicesLineOne:servicesLineOne,  
          servicesLineTwo:servicesLineTwo,
          servicesLineThree:servicesLineThree, 
        }
      }
}

export default Gallery ;

