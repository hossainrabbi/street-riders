import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import fakeData from '../../fakeData.json';
import Card from '../Card/Card';
import './Header.css';

const Header = () => {
    const [rider, setRider] = useState([]);

    useEffect(() => {
        setRider(fakeData);
    }, []);

    return (
        <div className="Header">
            <Container className="riders-cards">
                <Row>
                    {rider.map((data) => (
                        <Col lg={3} md={6} key={data.id}>
                            <Card data={data} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Header;
