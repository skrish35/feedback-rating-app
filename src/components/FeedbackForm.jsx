import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import FeedbackRating from './FeedbackRating';

function FeedbackForm({ handleAdd }) {
    const [rating, setRating] = useState(10);
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true);
            setMessage('');
        } else if (text !== '' && text.length < 10) {
            setBtnDisabled(true);
            setMessage('Text must be at least 10 characters.');
        } else {
            setBtnDisabled(false);
            setMessage(null);
        }
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFeedback = {
            text,
            rating
        };
        handleAdd(newFeedback);
        setText('')
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you like to rate your service with us?</h2>
                <FeedbackRating select={(rating) => setRating(rating)}/>
                <div className='input-group'>
                    <input
                        type='text'
                        name='text'
                        id='review-text'
                        placeholder='Write a review...'
                        onChange={handleTextChange}
                        value={text}
                    />
                    <Button
                        type='submit'
                        version='secondary'
                        isDisabled={btnDisabled}
                    >
                        Submit
                    </Button>
                </div>
                {message && (
                    <div className='message'>{message}</div>
                )}
            </form>
        </Card>
    )
}

export default FeedbackForm;