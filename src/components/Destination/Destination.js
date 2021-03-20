import React from 'react';
import { Container } from 'react-bootstrap';

const Destination = () => {
    return (
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{ height: '100vh' }}
        >
            <div className="text-center display-4">
                This is Destination Page.
            </div>
        </Container>
    );
};

export default Destination;
