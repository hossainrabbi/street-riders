import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import fakeData from '../../fakeData.json';
import Location from '../Location/Location';
import Map from '../Map/Map';

const RiderDestination = () => {
    const [pickFromValue, setPickFrom] = useState('');
    const [pickToValue, setPickTo] = useState('');
    const [riders, setRiders] = useState([]);
    const [locationSearchBar, setLocationSearchBar] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setRiders(fakeData);
    }, []);

    const rider = riders.find((rider) => rider.id === Number(id));

    let pickFrom;
    let pickTo;
    const handleChange = (e) => {
        if (e.target.name === 'pickFrom') {
            pickFrom = e.target.value;
        }

        if (e.target.name === 'pickTo') {
            pickTo = e.target.value;
        }
    };

    const handleClick = () => {
        setPickFrom(pickFrom);
        setPickTo(pickTo);
        setLocationSearchBar(!locationSearchBar);
    };

    return (
        <Container className="mt-4">
            <Row>
                <Col md={5} className="mb-4">
                    <Location
                        handleChange={handleChange}
                        handleClick={handleClick}
                        pickFromValue={pickFromValue}
                        pickToValue={pickToValue}
                        rider={rider}
                        locationSearchBar={locationSearchBar}
                    />
                </Col>
                <Col md={7}>
                    <Map />
                </Col>
            </Row>
        </Container>
    );
};

export default RiderDestination;
