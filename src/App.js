import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { FeedbackProvider } from './context/FeedbackContext';

function App () {
    return (
        <FeedbackProvider>
            <Header
                title='Feedback Rating'
                bgColor = 'rgba(0, 0, 0, 0.4)'
                textColor = '#ff6a95'
            />
            <div className='container'>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
            </div>
        </FeedbackProvider>
    )
}

export default App;