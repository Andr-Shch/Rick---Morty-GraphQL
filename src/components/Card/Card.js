import React from 'react';

const Card = ({character}) => {
    return (
        <div className='card w-25'>
            <img src={character.image} className='card-img-top' alt='character' />
            <div>
                
            </div>
        </div>
    );
};

export default Card;