import React from 'react';
import Sidebar from '../components/Sidebar';
import { Container, Row, Col } from 'react-bootstrap';

const Dashboard: React.FC = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={2}>
                    <Sidebar />
                </Col>
                <Col md={10}>
                    <h2>Dashboard</h2>
                    <p>Welcome to the admin dashboard!</p>
                </Col>
            </Row>
        </Container>
    )
};

export default Dashboard;