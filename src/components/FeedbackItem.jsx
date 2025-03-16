import { FaTimes } from 'react-icons/fa';
import Card from './shared/Card';

function FeedbackItem({ feedback, handleDelete }) {
    return (
        <Card>
            <div className='num-display'>{feedback.rating}</div>
            <button className='close' onClick={() => handleDelete(feedback.id)}>
                <FaTimes color='purple'/>
            </button>
            <div className='text-display'>{feedback.text}</div>
        </Card>
    )
}

export default FeedbackItem;