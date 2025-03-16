import { motion, AnimatePresence } from 'framer-motion';
import FeedbackItem from './FeedbackItem';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Spinner from '../components/shared/Spinner';

function FeedbackList() {
    const { feedbackList, isLoading } = useContext(FeedbackContext);

    if (!isLoading && (!feedbackList || feedbackList.length <= 0)) {
        return (
            <h2>No feedback found</h2>
        )
    }

    return isLoading ? <Spinner /> : (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedbackList.map((feedback) => (
                    <motion.div
                        key={feedback.id}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
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