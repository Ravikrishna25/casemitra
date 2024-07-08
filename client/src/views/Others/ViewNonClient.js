
import React from "react";
// reactstrap components

import { CardHeader, CardBody, Card } from "reactstrap";

import { Row, Col, Form, Input, Table, Select, Cascader } from 'antd';
import { Typography, Tag } from 'antd';
import { Button } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;
const { TextArea } = Input;
const columns = [
    {
        title: 'Case Name',
        dataIndex: 'CaseName',
        key: 'CaseName',
    },
    {
        title: 'Case No',
        dataIndex: 'caseNo',
        key: 'caseNo',
    },
    {
        title: 'Last Update',
        dataIndex: 'LastUpdate',
        key: 'LastUpdate',
    },
    // Add more columns as needed
];
const idColumns = [
    {
        title: 'Id Type',
        dataIndex: 'idType',
        key: 'idType',
    },
    {
        title: 'Id Number',
        dataIndex: 'idNumber',
        key: 'idNumber',
    }
];

const data = [

];
const idData = [
    {
        key:"idType",
        idType:"Pan",
        idNumber:"3123231"
    },
    {
        key:"idType",
        idType:"Aadhar",
        idNumber:"312323123121"
    },
];

function ViewNonClient() {
    return (
        <>
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <Title level={3}>Anand Ranganathan <Tag color="#0a2540">Non Client</Tag></Title>
                            </CardHeader>
                            <CardBody>
                                <div
                                    id="map"
                                    className="content"
                                    style={{ position: "relative", overflow: "hidden" }}
                                >
                                    <Form layout="horizontal"
                                        wrapperCol={{ span: 16 }}>
                                        <Row gutter={16}>
                                            <Col span={12}>
                                                <div style={{ border: "2px solid black", padding: '10px' }}>
                                                    <Title level={3}>Contact Info</Title>

                                                    <Form.Item label="Name">
                                                        <Text strong>Anand Ranganathan

                                                        </Text>
                                                    </Form.Item>
                                                    <div style={{ display: "flex", gap: "25%" }}>
                                                        <Form.Item label="Age">
                                                            <Text strong>36

                                                            </Text>
                                                        </Form.Item>
                                                        <Form.Item label="Father's Name">
                                                            <Text strong>Anand Ranganathan

                                                            </Text>
                                                        </Form.Item>
                                                    </div>
                                                    <div style={{ display: "flex", gap: "10%" }}>

                                                        <Form.Item label="Legal Type">
                                                            <Text strong>Non Client</Text>
                                                        </Form.Item>
                                                        <Form.Item label="Type">
                                                            <Text strong>Individual</Text>
                                                        </Form.Item>
                                                    </div>
                                                    <Form.Item label="Address">
                                                        <Text strong>Address of the Client</Text>
                                                    </Form.Item>

                                                    <Form.Item label="Email ID">
                                                        <Text strong>email@gmail.com</Text>
                                                    </Form.Item>
                                                    <Form.Item label="Phone">
                                                        <Text strong>654546546565</Text>
                                                    </Form.Item>
                                                </div>
                                                <br />
                                                <div style={{ border: "2px solid black", padding: '10px' }}>
                                                    <Title level={3}>Identification</Title>
                                                    <Table
                                                            columns={idColumns}
                                                            dataSource={idData}
                                                            scroll={{ x: 500, y: 350 }} // Adjust height as needed
                                                            pagination={{ pageSize: 10 }}
                                                            style={{ height: '60%' }}
                                                        />
                                                </div>

                                            </Col>
                                            <Col span={12}>
                                                <Row gutter={[0, 16]} style={{ height: '100%' }}>
                                                    <Col span={24} style={{}}>
                                                    <div style={{ border: "2px solid black", padding: '10px' }}>

                                                        <Title level={3}>Clients Linked</Title>
                                                        <Table
                                                            columns={columns}
                                                            dataSource={data}
                                                            scroll={{ x: 500, y: 350 }} // Adjust height as needed
                                                            pagination={{ pageSize: 10 }}
                                                            style={{ height: '60%' }}
                                                            />
                                                            </div>
                                                    </Col>
                                                    <Col span={24} >
                                                    <div style={{ border: "2px solid black", padding: '10px' }}>

                                                        <Title level={3}>Notes</Title>
                                                        {/* <Form.Item label="Comments" style={{ height: '100%' }}> */}
                                                            <TextArea rows={9} style={{ height: '80%' }} placeholder="Comment your Thought's here......" value={"hii dasjdnsndksndksjandjsnjdnsakjdnskjandkjsdjksnjkdaskjdnskjdnjksandsad sdkjsd sdksad asdkj "} />

                                                        {/* </Form.Item> */}
                                                    </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default ViewNonClient;
