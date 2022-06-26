import ServiCard from './cardService/serviceCard';

const Products = ({
        id, 
        title,
        cards, 
}) => {
  return (
    <>
        <div id='products'>
           <div>
                {
                (cards || []).map(
                        card => {
             return <productCard key={card.id} {...card}> </productCard>
                        })
            }
            </div>
        </div>   
    </>
  )
}
export default Products;