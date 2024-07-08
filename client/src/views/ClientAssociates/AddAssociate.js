
import React, { useState } from 'react';
import { Modal, Table, Checkbox } from 'antd';
import { CardHeader, CardBody, Card } from "reactstrap";

import { Row, Col, Form, Input, Radio, Select, Cascader, InputNumber, DatePicker, Space } from 'antd';
import { Typography, Tag } from 'antd';
import { Button } from 'antd';
import { SaveOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
const { Title } = Typography;
const { TextArea } = Input;
const AddAssociate = () => {

  const [open, setOpen] = useState(true);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [checkedRow, setCheckedRow] = useState(null); // Single row checked state
  const [clientName, setClientName] = useState('');

  const onFinish = (values) => {
    console.log('Form values: ', values);
    navigate('/your-desired-route'); // Change to your desired route
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleRadioChange = (e, record) => {
    const isChecked = e.target.checked;
    const updatedCheckedRow = isChecked ? record.key : null;

    setCheckedRow(updatedCheckedRow);

    // Log the name of the field
    if (isChecked) {
      setClientName(`${record.name}`);
      console.log(`Checked name: ${record.name}`);
    } else {
      console.log(`Unchecked name: ${record.name}`);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        // <Checkbox
        //   onChange={(e) => handleCheckboxChange(e, record)}
        //   checked={checkedRow === record.key}
        // />
        <Radio
        onChange={(e) => handleRadioChange(e, record)}
        checked={checkedRow === record.key}
      />
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Ram 1',
    },
    {
      key: '2',
      name: 'Ram 2',
    },
    {
      key: '3',
      name: 'Ram 3',
    },
    {
      key: '4',
      name: 'Ram 4',
    },
  ];

  return (
    <div id="map" className="content" style={{ position: "relative", overflow: "hidden" }}>
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
            
                <Title level={3}>Add a New Litigant for 
                  Client :{clientName}
                </Title>

             
            </CardHeader>
            <CardBody>

              <div
                id="map"
                className="content"
                style={{ position: "relative", overflow: "hidden", padding: "20px" }}
              >


                <Form layout="horizontal" onFinish={onFinish}>
                  <Row gutter={16}>
                    <Col span={12} style={{ width: "800px" }}>
                      <div style={{ border: "2px solid black", padding: '10px' }}>

                        <Title level={3}>Individual Info(Associate)</Title>
                        <Form.Item label="Name">
                          <Input />
                        </Form.Item>

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
                            <Form.Item label="">
                              {/* <Radio.Group> */}
                              <Radio value="client associate"> Client Associate</Radio>
                              {/* </Radio.Group> */}
                            </Form.Item>

                          </div>

                        </Col>

                      </Row>
                    </Col>
                  </Row>
                  <Link to={"/clientAssociate"}>
                    <Button type="primary" shape="round" icon={<SaveOutlined />} size={"large"} style={{ backgroundColor: "#0a2540", float: "right", marginTop: "16px" }} htmlType="submit">
                      Save Client Associate
                    </Button>
                  </Link>
                </Form>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Modal
        title="Select Client"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 100 }}
        />
      </Modal>
    </div>
  );
};

export default AddAssociate;
