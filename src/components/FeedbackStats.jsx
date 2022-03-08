
function FeedbackStats({feedback}) {
    let average=
     feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length

  return (
    <div className="Feedback-Stats"> 
    <h4>{feedback.length} REVIEWS</h4>
    <h4> Average rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
  }
export default FeedbackStats
