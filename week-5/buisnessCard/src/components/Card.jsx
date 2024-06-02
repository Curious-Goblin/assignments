import './Card.css'
import PropTypes from 'prop-types';

export function Card(props={}){

    return <div>
        <div id='mainDiv'>
        <h1 id='h1'>{props.username}</h1>
        <h3 className='h3'>{props.description}</h3>
        <h2 id='h2'>Interests</h2>
        <h3 className='h3'>{props.interests[0]}</h3>
        <h3 className='h3'>{props.interests[1]}</h3>
        <h3 className='h3'>{props.interests[2]}</h3>
        <a href={props.linkedIn}><button id='linkedIn' >LinkedIn</button></a>
        <a href={props.gitHub}><button id='gitHub'>GitHub</button></a>
        </div>
    </div>
}

Card.propTypes = {
    username: PropTypes.string.isRequired, 
    description:PropTypes.string.isRequired,
    interests:PropTypes.array.isRequired,
    linkedIn:PropTypes.string.isRequired,
    gitHub:PropTypes.string.isRequired
};
