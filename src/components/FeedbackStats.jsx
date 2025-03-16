import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
    const { feedbackList } = useContext(FeedbackContext);

    const average = feedbackList.reduce((acc, curr) => {
        return acc + curr.rating;
    }, 0) / feedbackList.length;

    return (
        <div className='feedback-stats'>
            <h4>{feedbackList.length} reviews</h4>
            <h4>Average Rating: { isNaN(average) ? 0 : average.toFixed(2)}</h4>
        </div>
    )
}

export default FeedbackStats;