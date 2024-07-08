
import React, { useState } from "react";
// reactstrap components

import { CardHeader, CardBody, Card } from "reactstrap";

import { Row, Col, Form, Input, Radio, Select, Cascader, InputNumber, DatePicker, Space } from 'antd';
import { Typography, Tag } from 'antd';
import { Button } from 'antd';
import { SaveOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
const { Title } = Typography;
const { TextArea } = Input;

function AddLitigantForm() {
    const [formType, setFormType] = useState('individual');

    const handleChangeType = (event) => {
        setFormType(event.target.value);
    };

    const onFinish = (values) => {
        console.log('Form values: ', values);
        navigate('/your-desired-route'); // Change to your desired route
    };

    return (
        <>
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>  <Title level={3}>Add a New Litigant</Title></CardHeader>
                            <CardBody>

                                <div
                                    id="map"
                                    className="content"
                                    style={{ position: "relative", overflow: "hidden", padding: "20px" }}
                                >
                                    <form>
                                        <div style={{display:"flex",gap:"7%",alignItems:"center",justifyContent:'center'}}>

                                        <label>
                                            <input
                                                type="radio"
                                                value="individual"
                                                checked={formType === 'individual'}
                                                onChange={handleChangeType}
                                            />
                                            Individual
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                value="company"
                                                checked={formType === 'company'}
                                                onChange={handleChangeType}
                                            />
                                            Company
                                        </label>
                                        </div>
                                    </form>
                                    <br />
                                    {formType === "individual" ?
                                        <Form layout="horizontal" onFinish={onFinish}>
                                            <Row gutter={16}>
                                                <Col span={12} style={{ width: "800px" }}>
                                                    <div style={{ border: "2px solid black", padding: '10px' }}>

                                                        <Title level={3}>Individual Info</Title>
                                                        <Form.Item label="Name">
                                                            <Input />
                                                        </Form.Item>
                                                        {/* <Form.Item label="Relationship">
                                                    <Select
                                                        showSearch
                                                        placeholder="Select a Relationship"
                                                        filterOption={(input, option) =>
                                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                                        }
                                                        options={[
                                                            {
                                                                value: 'Client',
                                                                label: 'Client',
                                                            },
                                                            {
                                                                value: 'Opponent',
                                                                label: 'Opponent',
                                                            }
                                                        ]}
                                                        />
                                                </Form.Item> */}
                                                        <div style={{ display: "flex", gap: "30%" }}>
                                                            <Form.Item label="DoB" >
                                                                <DatePicker />
                                                            </Form.Item>
                                                            <Form.Item label="Age">
                                                                <InputNumber />
                                                            </Form.Item>
                                                        </div>
                                                        <Form.Item label="Father's Name">
                                                            <Input />
                                                        </Form.Item>

                                                    </div>
                                                    <br />





                                                    {/* <Form.Item label="Type">
                                                    <Cascader options={options} changeOnSelect />
                                                </Form.Item>
                                                <Form.Item label="Legal Type">
                                                    <Select
                                                        showSearch
                                                        placeholder="Select a Legal Type"
                                                        filterOption={(input, option) =>
                                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                                        }
                                                        options={[
                                                            {
                                                                value: 'applicant',
                                                                label: 'applicant',
                                                            },
                                                            {
                                                                value: 'respondent',
                                                                label: 'respondent',
                                                            },
                                                            {
                                                                value: 'accused',
                                                                label: 'accused',
                                                            },
                                                            {
                                                                value: 'decree holder',
                                                                label: 'decree holder',
                                                            }
                                                        ]}
                                                    />
                                                </Form.Item>


                                                <Form.Item label="Company">
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item label="Designation">
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item label="Identification">
                                                    <Input />
                                                </Form.Item> */}

                                                    <div style={{ border: "2px solid black", padding: '10px' }}>

                                                        <Title level={3}>Identification</Title>
                                                        <Form
                                                            name="dynamic_form_nest_item"
                                                            // onFinish={onFinish}
                                                            style={{
                                                                // maxWidth: 600,
                                                            }}
                                                            autoComplete="off"
                                                        >
                                                            <Form.List name="id">
                                                                {(fields, { add, remove }) => (
                                                                    <>
                                                                        {fields.map(({ key, name, ...restField }) => (
                                                                            <Space
                                                                                key={key}
                                                                                style={{
                                                                                    display: 'flex',
                                                                                    marginBottom: 8,
                                                                                }}
                                                                                align="baseline"
                                                                            >
                                                                                <Form.Item
                                                                                    {...restField}
                                                                                    name={[name, 'idType']}
                                                                                    rules={[
                                                                                        {
                                                                                            required: true,
                                                                                            message: 'Missing Id Type',
                                                                                        },
                                                                                    ]}
                                                                                >
                                                                                    <Input placeholder="Id Type" />
                                                                                </Form.Item>
                                                                                <Form.Item
                                                                                    {...restField}
                                                                                    name={[name, 'idnumber']}
                                                                                    rules={[
                                                                                        {
                                                                                            required: true,
                                                                                            message: 'Missing Id Number',
                                                                                        },
                                                                                    ]}
                                                                                >
                                                                                    <Input placeholder="Id Number" />
                                                                                </Form.Item>
                                                                                <MinusCircleOutlined onClick={() => remove(name)} />
                                                                            </Space>
                                                                        ))} <Form.Item>
                                                                            <Button onClick={() => add()} block icon={<PlusOutlined />}>
                                                                                Add Id
                                                                            </Button>
                                                                        </Form.Item>

                                                                    </>
                                                                )}
                                                            </Form.List>
                                                            {/* <Form.Item>
                                                            <Button type="primary" htmlType="submit">
                                                                Submit
                                                            </Button>
                                                        </Form.Item> */}
                                                        </Form>
                                                    </div>
                                                    <br />
                                                    <div style={{ border: "2px solid black", padding: '10px' }}>

                                                        <Title level={3}>Notes</Title>
                                                        <Form.Item label="Notes" style={{ height: '100%' }}>
                                                            <TextArea rows={9} style={{ height: '80%' }} placeholder="Note your Thought's here......" />

                                                        </Form.Item>
                                                    </div>
                                                </Col>
                                                <Col span={12}>
                                                    <Row gutter={[0, 16]} style={{ height: '100%' }}>
                                                        <Col span={24}>
                                                            <div style={{ border: "2px solid black", padding: '10px' }}>

                                                                <Title level={3}>Address</Title>

                                                                <Form.Item label="Address">
                                                                    <TextArea rows={3} />
                                                                </Form.Item>

                                                                <Form.Item label="PinCode">
                                                                    <InputNumber />
                                                                </Form.Item>

                                                                <div style={{ display: "flex", gap: "15%" }}>
                                                                    <Form.Item label="City">
                                                                        <Input />
                                                                    </Form.Item>
                                                                    <Form.Item label="State">
                                                                        <Input />
                                                                    </Form.Item>
                                                                </div>
                                                            </div>

                                                        </Col>
                                                        <Col span={24}>
                                                            <div style={{ border: "2px solid black", padding: '10px' }}>

                                                                <Title level={3}>Contact</Title>
                                                                <Form.Item label="Email ID">
                                                                    <Input />
                                                                </Form.Item>
                                                                <Form.Item label="Phone">
                                                                    <Input />
                                                                </Form.Item>
                                                            </div>
                                                        </Col>
                                                        <Col span={24}>
                                                            <div style={{ border: "2px solid black", padding: '10px' }}>

                                                                <Title level={3}>Relationship</Title>
                                                                <Form.Item label="Client">
                                                                    {/* <Radio.Group> */}
                                                                    <Radio value="client"> Client </Radio>
                                                                    {/* </Radio.Group> */}
                                                                </Form.Item>

                                                            </div>

                                                        </Col>

                                                    </Row>
                                                </Col>
                                            </Row>
                                            <Link to={"/litigants"}>
                                                <Button type="primary" shape="round" icon={<SaveOutlined />} size={"large"} style={{ backgroundColor: "#0a2540", float: "right", marginTop: "16px" }} htmlType="submit">
                                                    Save Litigant
                                                </Button>
                                            </Link>
                                        </Form>
                                        :
                                        <Form layout="horizontal" onFinish={onFinish}>
                                            <Row gutter={16}>
                                                <Col span={12} style={{ width: "800px" }}>
                                                    <div style={{ border: "2px solid black", padding: '10px' }}>

                                                        <Title level={3}>Organisation Info</Title>
                                                        <div style={{ display: "flex", gap: "10%" }}>
                                                            <div>

                                                                <Form.Item label="Entity Name">
                                                                    <Input />
                                                                </Form.Item>
                                                                <Form.Item label="Represented By">
                                                                    <Input />
                                                                </Form.Item>
                                                                <Form.Item label="Designation">
                                                                    <Input />
                                                                </Form.Item>
                                                            </div>



                                                            <Form.Item label="Is Govt?">
                                                                {/* <Radio.Group> */}
                                                                <Space direction="vertical">
                                                                    <Radio value="yes">Yes</Radio>
                                                                    <Radio value="No">No</Radio>
                                                                </Space>
                                                                {/* </Radio.Group> */}
                                                            </Form.Item>
                                                        </div>



                                                    </div>
                                                    <br />





                                                    {/* <Form.Item label="Type">
                                                    <Cascader options={options} changeOnSelect />
                                                </Form.Item>
                                                <Form.Item label="Legal Type">
                                                    <Select
                                                        showSearch
                                                        placeholder="Select a Legal Type"
                                                        filterOption={(input, option) =>
                                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                                        }
                                                        options={[
                                                            {
                                                                value: 'applicant',
                                                                label: 'applicant',
                                                            },
                                                            {
                                                                value: 'respondent',
                                                                label: 'respondent',
                                                            },
                                                            {
                                                                value: 'accused',
                                                                label: 'accused',
                                                            },
                                                            {
                                                                value: 'decree holder',
                                                                label: 'decree holder',
                                                            }
                                                        ]}
                                                    />
                                                </Form.Item>


                                                <Form.Item label="Company">
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item label="Designation">
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item label="Identification">
                                                    <Input />
                                                </Form.Item> */}

                                                    <div style={{ border: "2px solid black", padding: '10px' }}>

                                                        <Title level={3}>Identification</Title>
                                                        <Form
                                                            name="dynamic_form_nest_item"
                                                            // onFinish={onFinish}
                                                            style={{
                                                                // maxWidth: 600,
                                                            }}
                                                            autoComplete="off"
                                                        >
                                                            <Form.List name="id">
                                                                {(fields, { add, remove }) => (
                                                                    <>
                                                                        {fields.map(({ key, name, ...restField }) => (
                                                                            <Space
                                                                                key={key}
                                                                                style={{
                                                                                    display: 'flex',
                                                                                    marginBottom: 8,
                                                                                }}
                                                                                align="baseline"
                                                                            >
                                                                                <Form.Item
                                                                                    {...restField}
                                                                                    name={[name, 'idType']}
                                                                                    rules={[
                                                                                        {
                                                                                            required: true,
                                                                                            message: 'Missing Id Type',
                                                                                        },
                                                                                    ]}
                                                                                >
                                                                                    <Input placeholder="Id Type" />
                                                                                </Form.Item>
                                                                                <Form.Item
                                                                                    {...restField}
                                                                                    name={[name, 'idnumber']}
                                                                                    rules={[
                                                                                        {
                                                                                            required: true,
                                                                                            message: 'Missing Id Number',
                                                                                        },
                                                                                    ]}
                                                                                >
                                                                                    <Input placeholder="Id Number" />
                                                                                </Form.Item>
                                                                                <MinusCircleOutlined onClick={() => remove(name)} />
                                                                            </Space>
                                                                        ))} <Form.Item>
                                                                            <Button onClick={() => add()} block icon={<PlusOutlined />}>
                                                                                Add Id
                                                                            </Button>
                                                                        </Form.Item>

                                                                    </>
                                                                )}
                                                            </Form.List>
                                                            {/* <Form.Item>
                                                            <Button type="primary" htmlType="submit">
                                                                Submit
                                                            </Button>
                                                        </Form.Item> */}
                                                        </Form>
                                                    </div>
                                                    <br />
                                                    <div style={{ border: "2px solid black", padding: '10px' }}>

                                                        <Title level={3}>Notes</Title>
                                                        <Form.Item label="Notes" style={{ height: '100%' }}>
                                                            <TextArea rows={9} style={{ height: '80%' }} placeholder="Note your Thought's here......" />

                                                        </Form.Item>
                                                    </div>
                                                </Col>
                                                <Col span={12}>
                                                    <Row gutter={[0, 16]} style={{ height: '100%' }}>
                                                        <Col span={24}>
                                                            <div style={{ border: "2px solid black", padding: '10px' }}>

                                                                <Title level={3}>Address</Title>

                                                                <Form.Item label="Address">
                                                                    <TextArea rows={3} />
                                                                </Form.Item>

                                                                <Form.Item label="PinCode">
                                                                    <InputNumber />
                                                                </Form.Item>

                                                                <div style={{ display: "flex", gap: "15%" }}>
                                                                    <Form.Item label="City">
                                                                        <Input />
                                                                    </Form.Item>
                                                                    <Form.Item label="State">
                                                                        <Input />
                                                                    </Form.Item>
                                                                </div>
                                                            </div>

                                                        </Col>
                                                        <Col span={24}>
                                                            <div style={{ border: "2px solid black", padding: '10px' }}>

                                                                <Title level={3}>Contact</Title>
                                                                <Form.Item label="Email ID">
                                                                    <Input />
                                                                </Form.Item>
                                                                <Form.Item label="Phone">
                                                                    <Input />
                                                                </Form.Item>
                                                            </div>
                                                        </Col>
                                                        <Col span={24}>
                                                            <div style={{ border: "2px solid black", padding: '10px' }}>

                                                                <Title level={3}>Relationship</Title>
                                                                <Form.Item label="Client">
                                                                    {/* <Radio.Group> */}
                                                                    <Radio value="client"> Client </Radio>
                                                                    {/* </Radio.Group> */}
                                                                </Form.Item>

                                                            </div>

                                                        </Col>

                                                    </Row>
                                                </Col>
                                            </Row>
                                            <Link to={"/litigants"}>
                                                <Button type="primary" shape="round" icon={<SaveOutlined />} size={"large"} style={{ backgroundColor: "#0a2540", float: "right", marginTop: "16px" }} htmlType="submit">
                                                    Save Litigant
                                                </Button>
                                            </Link>
                                        </Form>
                                    }
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default AddLitigantForm;
