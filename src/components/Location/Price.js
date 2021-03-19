import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Price.css';

const Price = ({ rider, count, price, userIcon }) => {
    return (
        <div className="price-item d-flex justify-content-between align-items-center text-center">
            <div style={{ width: '33%' }}>
                <img
                    src={rider?.img}
                    alt={rider?.name}
                    style={{ width: '70px' }}
                />
            </div>
            <div style={{ width: '33%' }}>
                <span style={{ marginRight: '5px' }}>{rider?.name}</span>{' '}
                <FontAwesomeIcon icon={userIcon} /> <span>{count}</span>
            </div>
            <p style={{ width: '33%' }} className="m-0">
                ${price}
            </p>
        </div>
    );
};

export default Price;
