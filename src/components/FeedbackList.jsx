import FeedbackItem from './FeedbackItem'
import { useContext } from 'react'

import FeedbackContext from '../context/FeedbackContext'

function FeedbackList({ yaseenDelete}) {
    const { feedback,  } = useContext(FeedbackContext)

    if ( ! feedback || feedback.length === 0){
   return <p> no feedback yet</p>
    
}
     return  (
         <div className='feedback-list'>
            { feedback.map((yaseen)=>(
           <FeedbackItem key={yaseen.id} item={yaseen}
           yaseenDelete={yaseenDelete} />
             )
             )
         }

</div>
     
     
     )

      
}

export default FeedbackList
