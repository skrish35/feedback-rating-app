import { motion, AnimatePresence } from 'framer-motion';
import FeedbackItem from './FeedbackItem';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
    const { feedbackList } = useContext(FeedbackContext);

    if (!feedbackList || feedbackList.length <= 0) {
        return (
            <h2>No feedback found</h2>
        )
    }
    return (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedbackList.map((feedback) => (
                    <motion.div
                        key={feedback.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedbackItem
                            key={feedback.id}
                            feedback={feedback}
                        />
                    </motion.div>

                ))}
            </AnimatePresence>
        </div>
    )
}

export default FeedbackList;