import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

function App () {
    const [feedbackList, setFeedbackList] = useState(FeedbackData);

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedbackList([newFeedback, ...feedbackList]);
    }

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
                <FeedbackForm handleAdd={addFeedback}/>
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