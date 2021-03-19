import React from 'react';
import { useHistory } from 'react-router';
import './Card.css';

const Card = ({ data }) => {
    const history = useHistory();
    const { id, img, name } = data;

    const handleClick = () => {
        history.push(`/rider/${id}`);
    };

    return (
        <div className="Card my-3" onClick={handleClick}>
            <img src={img} alt={name} />
            <h4>{name}</h4>
        </div>
    );
};

export default Card;
