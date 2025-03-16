import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedbackList, setFeedbackList] = useState(FeedbackData);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    });

    // Add new feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedbackList([newFeedback, ...feedbackList]);
    }

    // Delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete this feedback?')) {
            setFeedbackList(feedbackList.filter((feedback) => feedback.id !== id));
        }
    }

    // Set feedback to be edited
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        });
    }

    // Update feedback
    const updateFeedback = (id, updatedFeedback) => {
       setFeedbackList(feedbackList.map((feedback) => {
           if (feedback.id === id) {
               return {...feedback, ...updatedFeedback};
           } else {
               return feedback;
           }
       }));
    }

    return <FeedbackContext.Provider value={{
        feedbackList,
        feedbackEdit,
        addFeedback,
        editFeedback,
        updateFeedback,
        deleteFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;