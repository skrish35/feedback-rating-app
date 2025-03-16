import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedbackList, handleDelete }) {
    if (!feedbackList || feedbackList.length <= 0) {
        return (
            <h2>No feedback found</h2>
        )
    }
    return (
        <div className='feedback-list'>
            {feedbackList.map((feedback) => (
                <FeedbackItem
                    key={feedback.id}
                    feedback={feedback}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    )
}

export default FeedbackList;