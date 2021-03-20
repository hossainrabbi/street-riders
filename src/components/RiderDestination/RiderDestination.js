import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import fakeData from '../../fakeData.json';
import GoogleMap from '../GoogleMap/GoogleMap';
import Location from '../Location/Location';
import './RiderDestination.css';

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

    const onSubmit = (data) => {
        const { pickFrom, pickTo } = data;
        setPickFrom(pickFrom);
        setPickTo(pickTo);
        setLocationSearchBar(!locationSearchBar);
    };

    return (
        <Container className="RiderDestination">
            <Row>
                <Col md={5} className="mb-4">
                    <Location
                        onSubmit={onSubmit}
                        pickFromValue={pickFromValue}
                        pickToValue={pickToValue}
                        rider={rider}
                        locationSearchBar={locationSearchBar}
                    />
                </Col>
                <Col md={7}>
                    <GoogleMap />
                </Col>
            </Row>
        </Container>
    );
};

export default RiderDestination;
