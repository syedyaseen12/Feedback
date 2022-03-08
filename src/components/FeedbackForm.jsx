/* eslint-disable no-undef */
import { useState } from 'react'
import Card from './shared/Card'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'

function FeedbackForm({handleAdd}) {
  const[text, setText]= useState(" ")
  const [rating,setRating]=useState(10)
  const[btnDisabled, setBtnDisabled]= useState(true)
  const[message, setmessage]= useState(" ")


  const handleTextchange=(e)=>{
    if (text===''){
      setBtnDisabled(true)
      setmessage(null)
    }
    else if(text!==''  && text.trim().length <= 10){
      setmessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    }
    else{
      setmessage(null)
      setBtnDisabled(false)
    }
     setText(e.target.value);
  }
     const handleSubmit=(e)=>{
            e.preventDefault()
            if(text.trim().length>10){
              const newFeedback = {
                
                text,
                rating,
              }
              handleAdd(newFeedback)
              setText('')

            }
           
     }

  return (
   <Card>
       <form onSubmit={handleSubmit}>
        <h2> how would you rate your service with us ? </h2>
        <RatingSelect select ={(rating)=> setRating(rating)}/>
        
        <div className='input-group'>
       <input onChange={handleTextchange} type='text' placeholder='write a review here' value={text}/>
         <Button type='submit' isDisabled={btnDisabled}>send</Button>
    </div>
    {message&&<div className='message'>{message}</div>}
    </form>
    </Card>
  )
  }

export default FeedbackForm