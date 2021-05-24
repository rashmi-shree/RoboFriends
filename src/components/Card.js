import React from 'react';

const Card = (props) => {
    const {name, email, id} = props;
    return(
        <div className='bg-light-green dib br3 pa3 ma3 grow shadow-5' >
            <img src={`https://robohash.org/${id}200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;