import {FaTimes} from  'react-icons/fa'
import Card from './shared/Card'

function FeedbackItem({item, yaseenDelete}) {
  return ( 

  
  
          
            <Card>
            <div className="num-display">{(item.rating)}</div>
            <button onClick={()=> yaseenDelete (item.id)} className="close">
            <FaTimes color='black'/>
            </button>
                      
                     
            <div className="text-display"> {item.message} </div>
            <div className="phone"> {item.tel}</div>
                               
              </Card >               
          
    )
   
}

export default FeedbackItem
