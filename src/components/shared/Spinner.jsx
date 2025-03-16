import spinner from '../assets/spinner.gif';

function Spinner() {
    return (
        <img
            src={spinner}
            alt='Loading...'
            className='spinner'
        />
    )
}

export default Spinner;