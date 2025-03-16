import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';

function App () {
    const [feedbackList, setFeedbackList] = useState(FeedbackData);

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete this feedback?')) {
            setFeedbackList(feedbackList.filter((feedback) => feedback.id !== id));
        }
    }

    return (
        <>
            <Header
                title='Feedback Rating'
                bgColor = 'rgba(0, 0, 0, 0.4)'
                textColor = '#ff6a95'
            />
            <div className='container'>
                <FeedbackStats feedbackList={feedbackList} />
                <FeedbackList
                    feedbackList={feedbackList}
                    handleDelete={deleteFeedback}
                />
            </div>
        </>
    )
}

export default App;