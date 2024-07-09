import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
    return (
        <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
             activeKey="/home">
            <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/users">User Management</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default Sidebar;