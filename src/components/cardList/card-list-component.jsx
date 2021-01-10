import "./cardlist.style.css";

import {Card} from '../Card/Card.comp'




export const Cardlist = props => {
   
    return (
        <div className='card-list'>
        
         { props.Monsters.map(monster=>(
           <Card key={monster.id} onemonster={monster} />
           ))} 
        </div>
        
        )
} ;

