import { useState, useContext, useEffect } from 'react';
import FeedbackContext from "../context/FeedbackContext";

function FeedbackRating({ select }) {
    const { feedbackEdit } = useContext(FeedbackContext);
    const [selected, setSelected] = useState(10);

    useEffect(() => {
        setSelected(feedbackEdit.item.rating);
    }, [feedbackEdit]);

    const handleRatingChange = (e) => {
        setSelected(+e.target.value);
        select(+e.target.value);
    }

    return (
        <ul className='rating'>
            <li>
                <input
                    type='radio'
                    name='num1'
                    id='num1'
                    checked={selected === 1}
                    onChange={handleRatingChange}
                    value='1'
                />
                <label htmlFor='num1'>1</label>
            </li>
            <li>
                <input
                    type='radio'
                    name='num2'
                    id='num2'
                    checked={selected === 2}
                    onChange={handleRatingChange}
                    value='2'
                />
                <label htmlFor='num2'>2</label>
            </li>
            <li>
                <input
                    type='radio'
                    name='num3'
                    id='num3'
                    checked={selected === 3}
                    onChange={handleRatingChange}
                    value='3'
                />
                <label htmlFor='num3'>3</label>
            </li>
            <li>
                <input
                    type='radio'
                    name='num4'
                    id='num4'
                    checked={selected === 4}
                    onChange={handleRatingChange}
                    value='4'
                />
                <label htmlFor='num4'>4</label>
            </li>
            <li>
                <input
                    type='radio'
                    name='num5'
                    id='num5'
                    checked={selected === 5}
                    onChange={handleRatingChange}
                    value='5'
                />
                <label htmlFor='num5'>5</label>
            </li>
            <li>
                <input
                    type='radio'
                    name='num6'
                    id='num6'
                    checked={selected === 6}
                    onChange={handleRatingChange}
                    value='6'
                />
                <label htmlFor='num6'>6</label>
            </li>
            <li>
                <input
                    type='radio'
                    name='num7'
                    id='num7'
                    checked={selected === 7}
                    onChange={handleRatingChange}
                    value='7'
                />
                <label htmlFor='num7'>7</label>
            </li>
            <li>
                <input
                    type='radio'
                    name='num8'
                    id='num8'
                    checked={selected === 8}
                    onChange={handleRatingChange}
                    value='8'
                />
                <label htmlFor='num8'>8</label>
            </li>
            <li>
                <input
                    type='radio'
                    name='num9'
                    id='num9'
                    checked={selected === 9}
                    onChange={handleRatingChange}
                    value='9'
                />
                <label htmlFor='num9'>9</label>
            </li>
            <li>
                <input
                    type='radio'
                    name='num10'
                    id='num10'
                    checked={selected === 10}
                    onChange={handleRatingChange}
                    value='10'
                />
                <label htmlFor='num10'>10</label>
            </li>
        </ul>
    )
}

export default FeedbackRating;