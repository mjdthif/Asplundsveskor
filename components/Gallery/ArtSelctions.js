import { useState, createContext, useContext } from "react";
import ServiCard from './artCard';
import Style from './selctions.module.scss';

const ArtSelctions = ({
        cards, 
}) => {

  return (
    <>
        <div className={Style.selctionContainer}>
         
          
                <div className={Style.selctionDiv}>
                {
                (cards || []).map(
                        card => {
             return <ServiCard key={card.id} {...card}> </ServiCard>
                        })
            }
                  
                </div>
        </div>
           
    </>
  )
}
export default ArtSelctions;