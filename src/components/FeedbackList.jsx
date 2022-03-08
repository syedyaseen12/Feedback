import FeedbackItem from './FeedbackItem'
function FeedbackList({feedback,yaseenDelete}) {
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
