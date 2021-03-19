import {
    faMapMarkerAlt,
    faUser,
    faUserFriends,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Price from './Price';
import './location.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Location = (props) => {
    const {
        handleChange,
        handleClick,
        pickFromValue,
        pickToValue,
        rider,
        locationSearchBar,
    } = props;

    return (
        <div className="location">
            {locationSearchBar && (
                <div>
                    <Form.Group>
                        <Form.Label>Pick From</Form.Label>
                        <Form.Control
                            type="text"
                            name="pickFrom"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Pick To</Form.Label>
                        <Form.Control
                            type="text"
                            name="pickTo"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Control type="date" className="my-4" />
                    <Button
                        variant="primary"
                        type="button"
                        className="custrom-btn w-100"
                        onClick={handleClick}
                    >
                        Search
                    </Button>
                </div>
            )}
            {!locationSearchBar && (
                <>
                    <div className="location-name mt-4">
                        <h5>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />{' '}
                            {pickFromValue}
                        </h5>
                        <h5>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />{' '}
                            {pickToValue}
                        </h5>
                    </div>
                    <Price
                        rider={rider}
                        count="1"
                        price="30"
                        userIcon={faUser}
                    />
                    <Price
                        rider={rider}
                        count="2"
                        price="50"
                        userIcon={faUserFriends}
                    />
                    <Price
                        rider={rider}
                        count="3"
                        price="80"
                        userIcon={faUsers}
                    />
                </>
            )}
        </div>
    );
};

export default Location;
