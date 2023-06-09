import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'


function FeedbackList({ feedback }) {
  if (!feedback || feedback.lengh === 0) {
    return <p>No Feedback Yet</p>
  }
  
  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item}/>
      ))}
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.text.isRequired,
      rating: PropTypes.number.isRequired,
    })
  )
}

export default FeedbackList