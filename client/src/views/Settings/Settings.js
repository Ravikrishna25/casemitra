import React from 'react'
import { Card, Col, Row } from 'antd';
import { Typography, Tag } from 'antd';
import { Link } from 'react-router-dom';
const { Title } = Typography;

const Settings = () => {
    return (
        <div className='content'>
            <Row>
                <Col
                    xs={{
                        span: 5,
                        offset: 1,
                    }}
                    lg={{
                        span: 6,
                        offset: 2,
                    }}
                >
                    <Card>
                        <Link to={"/settings/manageCourts"}>
                    <Title level={3}>Manage Courts</Title>
                        </Link>
                    <Title level={5}>Manage Case Types,Type,Courts</Title>
                    </Card>
                </Col>
                <Col
                    xs={{
                        span: 11,
                        offset: 1,
                    }}
                    lg={{
                        span: 6,
                        offset: 2,
                    }}
                >
                     <Card>
                        <Link to={"/settings/manageFirms"}>
                    <Title level={3}>Manage Firms</Title>
                        </Link>
                    <Title level={5}>Manage Firms and Firm Settings</Title>
                    </Card>
                </Col>
                <Col
                    xs={{
                        span: 5,
                        offset: 1,
                    }}
                    lg={{
                        span: 6,
                        offset: 2,
                    }}
                >
                     <Card>
                        <Link to={"/settings/manageCourts"}>
                    <Title level={3}>Manage USer Settings</Title>
                        </Link>
                    <Title level={5}>Manage Case Types,Type,Courts</Title>
                    </Card>
                </Col>
              
               
            </Row>
            <br />
            <br />
            <br />
            <Row>
            <Col
                    xs={{
                        span: 5,
                        offset: 1,
                    }}
                    lg={{
                        span: 6,
                        offset: 2,
                    }}
                >
                     <Card>
                        <Link to={"/settings/manageCourts"}>
                    <Title level={3}>Manage Reports</Title>
                        </Link>
                    <Title level={5}>Manage Case Types,Type,Courts</Title>
                    </Card>
                </Col>
                <Col
                    xs={{
                        span: 11,
                        offset: 1,
                    }}
                    lg={{
                        span: 6,
                        offset: 2,
                    }}
                >
                     <Card>
                        <Link to={"/settings/manageCourts"}>
                    <Title level={3}>Manage Profile</Title>
                        </Link>
                    <Title level={5}>Manage Case Types,Type,Courts</Title>
                    </Card>
                </Col>
                <Col
                    xs={{
                        span: 5,
                        offset: 1,
                    }}
                    lg={{
                        span: 6,
                        offset: 2,
                    }}
                >
                     <Card>
                        <Link to={"/settings/manageCourts"}>
                    <Title level={3}>Manage Notifications</Title>
                        </Link>
                    <Title level={5}>Manage Case Types,Type,Courts</Title>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Settings