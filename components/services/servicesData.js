import svg1 from '../../public/Assests/asplund1.webp';
import svg2 from '../../public/Assests/asplund2.webp';
import svg3 from '../../public/Assests/asplund3.webp';
import svg5 from '../../public/Assests/asplund4.webp';
import svg4 from '../../public/Assests/asplund5.webp';



export const  asplundServices = {
    id:'1', 
    title: 'services', 
    cards : [
        {
        id: '1', 
        cardIcon: svg1,
        cardH1 : 'Kläder, kemtvätt och tvättning',
        descir: 'Vi tvättar alla typer av material och plagg exempelvis: Känsliga material och textilier, läder, päls, skjortor, kostymer och klänningar.',  
       },
        {
           id: '2', 
           cardIcon: svg2,
           cardH1 : 'Skrädderi',
           descir: 'Vi utför allt inom skrädderi: Sömnad och lagning av exempelvis kostymer, klänningar och bröllopsklänningar.',  
       },
       {
           id: '3', 
           cardIcon: svg3,
           cardH1 : 'Nycklar',
           descir: 'Vi kopierar och lagar alla typer av nycklar',  
       },         
    ],
}
