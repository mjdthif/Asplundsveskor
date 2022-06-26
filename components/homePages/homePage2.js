import Services from '../services/services';
import {asplundServices} from '../services/servicesData'
import style from './homePage2.module.scss';


export default function HomePage2() {
  return (
 
    <div className={style.homeContainer}>


      <div className={style.profileContainer}>
          
                  <div className={style.title}>
                      <h1>Services</h1>
                            <h2>
                              Om din väska skadats under resan är du välkommen att 
                              leverera den till vår kunniga personal. Vi samarbetar med många flygbolag såsom Finnair, 
                              Air France, KLM och British Airways. Vi samarbetar också med workshops för att hjälpa våra kunder med andra typer av underhållsservice. 
                              Vår serviceverkstad erbjuder olika typer av tjänster, inte bara för våra varumärken, utan också för många andra kända märken som Rimowa, 
                              Roncato Tumi och många fler. Välkommen in
                        </h2>
                    </div>
        
          <div>
              <Services {...asplundServices}/>
                <Services {...asplundServices}/>
          </div>    
      </div>

      <div className={style.profileContainer}>
 
                <div className={style.title}>
                      <h1>Services</h1>
                            <h2>
                              Om din väska skadats under resan är du välkommen att 
                              leverera den till vår kunniga personal. Vi samarbetar med många flygbolag såsom Finnair, 
                              Air France, KLM och British Airways. Vi samarbetar också med workshops för att hjälpa våra kunder med andra typer av underhållsservice. 
                              Vår serviceverkstad erbjuder olika typer av tjänster, inte bara för våra varumärken, utan också för många andra kända märken som Rimowa, 
                              Roncato Tumi och många fler. Välkommen in
                        </h2>
                    </div>
          <div>
                <Services {...asplundServices}/>
                <Services {...asplundServices}/>
          </div> 
        
          <div>
           
          </div>    
      </div>
    </div>

 
  )
}
