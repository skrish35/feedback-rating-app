import { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [feedbackList, setFeedbackList] = useState([]);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    });

    useEffect(() => {
        fetchFeedback();
    }, []);

    const fetchFeedback = async () => {
        const response = await fetch(`/feedback?_sort=id&_order=desc`);
        const data = await response.json();
        setFeedbackList(data);
        setIsLoading(false);
    }

    // Add new feedback
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        });

        const data = await response.json();
        setFeedbackList([data, ...feedbackList]);
    }

    // Delete feedback
    const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure you want to delete this feedback?')) {
            const response = await fetch(`/feedback/${id}`, { method: 'DELETE'});
            const data = await response.json();
            setFeedbackList(feedbackList.filter((feedback) => feedback.id !== data.id));
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
    const updateFeedback = async (id, updatedFeedback) => {
       const response = await fetch(`/feedback/${id}`, {
           method: 'PUT',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(updatedFeedback)
       });

       const data = await response.json();

        setFeedbackList(feedbackList.map((feedback) => {
           if (feedback.id === id) {
               return {...feedback, ...data};
           } else {
               return feedback;
           }
       }));

        setFeedbackEdit({
            item: {},
            edit: false
        });
    }

    return <FeedbackContext.Provider value={{
        isLoading,
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